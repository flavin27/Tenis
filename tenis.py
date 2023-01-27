import xmltodict

with open('Tennis_v3/rankings.xsd') as f:
    xsd_string = f.read()
xsd_dict = xmltodict.parse(xsd_string)
print(xsd_dict)
