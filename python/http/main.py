from http_context_manager import HTTPContextManager

with HTTPContextManager("www.google.com") as conn:
    conn.request(method="GET", url="")
    with conn.getresponse() as response:
        print(response.status)
