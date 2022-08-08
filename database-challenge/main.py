import json


class Main:
    def __init__(self, fn):
        self.fn = fn

    def process(self):
        f = open(self.fn)
        data = json.load(f)
        f.close()
        return data

    def parse_json(self, jsonData):
        for invoice in jsonData["data"]:
            print("INSERT INTO OrderInvoices VALUES ({}, {}, {}, {}, {}, {}, {}, {})".format(invoice["UUID"], invoice["Customer Name"], invoice["Cell Phone"], invoice["Email"], invoice["Address"], invoice["Order Total"], invoice["Order Date"], invoice["Discount Code"]))
            for book_order in invoice["Book Set ID"]:
                print("INSERT INTO BookOrders VALUES ({}, {})".format(invoice["UUID"], book_order))
            for coaching_service in invoice["Coaching Service ID"]:
                print("INSERT INTO CoachingServiceOrders VALUES ({}, {})".format(invoice["UUID"], coaching_service))

if __name__ == '__main__':
    m = Main('data.json')
    data = m.process()
    m.parse_json(data)