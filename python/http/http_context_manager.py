from http import client

class HTTPContextManager():

    def __init__(self, url):
        self.url = url

    def __enter__(self):
        self.conn = client.HTTPSConnection(self.url)
        return self.conn
 
    def __exit__(self, exc_type, exc_value, exc_traceback):
        if exc_type is not None or exc_value is not None or exc_traceback is not None:
            print(exc_type)
            print(exc_value)
            print(exc_traceback)
        self.conn.close()