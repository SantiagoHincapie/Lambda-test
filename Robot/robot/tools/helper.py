import configparser
import logging
from datetime import datetime
from xmlrpc.client import DateTime
import re

def read_config():
    config = configparser.ConfigParser()
    config.read('config/configurations.ini')
    return config

def config_url() -> tuple:
    config = read_config()

    urltoken = config['sic']['urltoken']

    return (urltoken)

def config_schedule() -> tuple:
    config = read_config()

    interval = config['schedule']['intervalseconds']

    return (interval)

def config_mylog() -> tuple:
    config = read_config()
    pathlog = config['mylog']['path']
    namelog = config['mylog']['name']
    return (pathlog,namelog)


class log:
    def __init__(self, name, pathfile) -> None:
        self.logger = logging.getLogger(name)
        self.logger.setLevel(logging.DEBUG)


        #file = datetime.now().strftime('LOG_%d-%m-%Y.log')
        file = datetime.now().strftime(pathfile)
        ch = logging.FileHandler(file, mode='a', encoding=None, delay=False, errors=None)

        ch.setLevel(logging.DEBUG)

        # create formatter
        formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')

        # add formatter to ch
        ch.setFormatter(formatter)

        # add ch to logger
        self.logger.addHandler(ch)

    def add_debug(self, msg) -> None:
        self.logger.debug(msg)

    def add_info(self, msg) -> None:
        self.logger.info(msg)

    def add_warning(self, msg) -> None:
        self.logger.warning(msg)

    def add_error(self, msg) -> None:
        self.logger.error(msg)

    def add_critical(self, msg) -> None:
        self.logger.critical(msg)

"""Generate regexpresion from a string"""
def regexpre(msg,reg):
    p = re.compile(reg)
    return p.match(msg)
