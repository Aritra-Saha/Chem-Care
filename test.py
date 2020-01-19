#!/Users/tanavya/opt/anaconda3/bin/python

from __future__ import print_function
import cgi, cgitb

print("Content-type: text/html\n")
data = cgi.FieldStorage()
print(data["param"].value)




