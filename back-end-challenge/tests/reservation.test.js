import axios from 'axios';
import moment from 'moment-timezone';

const URL = 'http://localhost:8080/reservation';

const USER = 'some-user';

const VALID_DATE = {
  start: moment().add(2, 'hours'),
  end: moment().add(5, 'hours'),
};

describe('POST reservation', () => {
  let response;

  afterEach(() => {
    response = {};
  });

  test('sends a 400 and an error message when the start and end times are not dates', async () => {
    try {
      await axios.post(URL, {
        user: USER,
        event: 'Global Hack-a-thon',
        startTime: 'not a date',
        endTime: 'not a date',
      });
    } catch (e) {
      response = e.response;
      expect(response.status).toEqual(400);
      expect(response.statusText).toEqual('Invalid Start Time, Invalid End Time');
    }
  });

  test('sends a 400 and an error message when the user and event are not strings', async () => {
    try {
      await axios.post(URL, {
        user: 42,
        event: 42,
        startTime: moment().toISOString(),
        endTime: moment().toISOString(),
      });
    } catch (e) {
      response = e.response;
    }

    expect(response.status).toEqual(400);
    expect(response.statusText).toEqual('Invalid User, Invalid Event');
  });

  test('sends a 400 and an error message when the reservation is in the past', async () => {
    try {
      await axios.post(URL, {
        user: USER,
        event: 'Global Hack-a-thon',
        startTime: moment().subtract(1, 'hours').toISOString(),
        endTime: moment().toISOString(),
      });
    } catch (e) {
      response = e.response;
    }

    expect(response.status).toEqual(400);
    expect(response.statusText).toEqual('Event reservation has already passed');
  });

  test('sends a 400 and an error message when the end time is before the start time', async () => {
    try {
      await axios.post(URL, {
        user: 'some-user',
        event: 'Global Hack-a-thon',
        startTime: moment().toISOString(),
        endTime: moment().subtract(1, 'hours').toISOString(),
      });
    } catch (e) {
      response = e.response;
    }

    expect(response.status).toEqual(400);
    expect(response.statusText).toEqual('End time is before start time');
  });

  test('sends a 200 when the body is correct', async () => {
    const response = await axios.post(URL, {
      user: 'some-user',
      event: 'Global Hack-a-thon',
      startTime: VALID_DATE.start.toISOString(),
      endTime: VALID_DATE.end.toISOString(),
    });

    expect(response.status).toEqual(200);
  });

  test('sends a 400 and an error message when end time is between existing event', async () => {
    try {
      await axios.post(URL, {
        user: 'some-user',
        event: 'Global Hack-a-thon',
        startTime: VALID_DATE.start.clone().subtract(1, 'hours').toISOString(),
        endTime: VALID_DATE.end.clone().subtract(2, 'hours').toISOString(),
      });
    } catch (e) {
      response = e.response;
    }

    expect(response.status).toEqual(400);
    expect(response.statusText).toEqual('Event overlaps an existing event');
  });

  test('sends a 400 and an error message when start time is between existing event', async () => {
    try {
      await axios.post(URL, {
        user: 'some-user',
        event: 'Global Hack-a-thon',
        startTime: VALID_DATE.start.clone().add(1, 'hours').toISOString(),
        endTime: VALID_DATE.end.clone().add(1, 'hours').toISOString(),
      });
    } catch (e) {
      response = e.response;
      expect(response.status).toEqual(400);
      expect(response.statusText).toEqual('Event overlaps an existing event');
    }
  });

  test('sends a 400 and an error message when start and end time overlap the entire existing event', async () => {
    try {
      await axios.post(URL, {
        user: 'some-user',
        event: 'Global Hack-a-thon',
        startTime: VALID_DATE.start.clone().subtract(1, 'hours').toISOString(),
        endTime: VALID_DATE.end.clone().add(1, 'hours').toISOString(),
      });
    } catch (e) {
      response = e.response;
    }

    expect(response.status).toEqual(400);
    expect(response.statusText).toEqual('Event overlaps an existing event');
  });

  test('sends a 400 and an error message when reservation falls entirely within an existing event', async () => {
    try {
      await axios.post(URL, {
        user: 'some-user',
        event: 'Global Hack-a-thon',
        startTime: VALID_DATE.start.clone().add(1, 'hours').toISOString(),
        endTime: VALID_DATE.end.clone().subtract(1, 'hours').toISOString(),
      });
    } catch (e) {
      response = e.response;
    }

    expect(response.status).toEqual(400);
    expect(response.statusText).toEqual('Event overlaps an existing event');
  });

  test('sends a 200 when the event does not overalp an existing event', async () => {
    const response = await axios.post(URL, {
      user: 'some-user',
      event: 'Global Hack-a-thon',
      startTime: VALID_DATE.end.clone().add(1, 'hours').toISOString(),
      endTime: VALID_DATE.end.clone().add(2, 'hours').toISOString(),
    });

    expect(response.status).toEqual(200);
  });
});

describe('GET reservation', () => {
  let response;

  test('returns the two reservations for the given user', async () => {
    response = await axios.get(`${URL}?user=${USER}`);

    expect(response.data).toEqual([
      {
        user: USER,
        event: 'Global Hack-a-thon',
        startTime: VALID_DATE.start.milliseconds(0).toISOString(),
        endTime: VALID_DATE.end.milliseconds(0).toISOString(),
      },
      {
        user: USER,
        event: 'Global Hack-a-thon',
        startTime: VALID_DATE.end.clone().add(1, 'hours').toISOString(),
        endTime: VALID_DATE.end.clone().add(2, 'hours').toISOString(),
      },
    ]);
  });

  test('returns an empty array for a user with no reservations', async () => {
    response = await axios.get(`${URL}?user=other-user`);

    expect(response.data).toEqual([]);
  });

  test('sends a 400 and an error message when the user is incorrect', async () => {
    try {
      await axios.get(URL);
    } catch (e) {
      response = e.response;
    }

    expect(response.status).toEqual(400);
    expect(response.statusText).toEqual('Invalid User');
  });

});