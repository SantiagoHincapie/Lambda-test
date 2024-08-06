from ast import Try
from tools.helper import config_mylog
from tools.helper import config_schedule
from tools.helper import config_url
from tools.log import log
import schedule
import time
from datetime import datetime
import requests

def job(mylog):

    url = config_url()
    response = requests.get(url)
    name = response.url.split("/")[-1]
    now = datetime.now().strftime("%d/%m/%Y %H:%M:%S")
    info = f"{[now]} Url de respuesta: {response.url} estado: {response.status_code} nombre: {name}"
    
    print(info)
    mylog.add_info(info)

    name = f"./downloads/{name}"
    with open(name, mode="wb") as file:
        file.write(response.content)
    

if __name__ == "__main__":
    interval = config_schedule()
    pathlog,namelog = config_mylog()

    mylog = log(namelog,pathlog)
    
    print(f'Intervalo: {interval}')
    
    job(mylog=mylog)
    schedule.every(int(interval)).seconds.do(job,mylog=mylog)

    while True:
        schedule.run_pending()
        time.sleep(1)


