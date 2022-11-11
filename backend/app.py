import numpy as np
import pandas as pd
from dateutil import parser
from datetime import datetime, timezone
from flask import Flask, request


app = Flask(__name__)

reservations = {}
out = 0
times = []


def find_overlapping_times(times):
    """
    Params:

        times(list): List of Tuples of TZ Aware Datetimes

    Returns:

       overlaps(int): Length of the dataframe, where each row is a row that has a date
       range which overlaps another row. If Len == 0 there are no overlapping date ranges.

    """

    df = pd.DataFrame(times)
    df.rename(columns={0: "Start_Date", 1: "End_Date"}, inplace=True)
    a = np.triu(df['End_Date'].values > df['Start_Date'].values[:, None])
    b = np.triu(df['Start_Date'].values < df['End_Date'].values[:, None])
    overlaps = len(df[(a & b).sum(0) == 1])

    return overlaps


@app.route("/reservation", methods=['Get', 'Post'])
def hello_world():
    if request.method == 'POST':
        global reservations
        global out
        global times

        # Counter for the Nth reservation in the session
        out += 1
        reservation = request.get_json()

        # Parsing out the date and removing the z at the end
        start = parser.parse(request.json['startTime'])
        end = parser.parse(request.json['endTime'])

        times.append((start, end))

        # Finding overlapping times
        overlaps = find_overlapping_times(times)

        # Checking to see if the requested reservation overlaps with any that are
        # already stored.
        if overlaps > 0:
            # Checking to see if the start time is after the current date
            if start > datetime.now(timezone.utc):
                reservations[out] = reservation
            else:
                return "Please Enter a Future Date", 400
        #
        # else:
        #     return "Your Reservation Overlaps an Existing One", 400
        return reservations

    if request.method == 'GET':
        return reservations


if __name__ == "__main__":
    app.run(debug=True)