class TicketException(Exception):

    value = 0

    def __init__(self, value):
        self.value = value

    def __str__(self):
        return repr(str(self.value))
    #write your code above this line

try:
    raise TicketException(2)
except TicketException as ticketEx:
    print ticketEx
