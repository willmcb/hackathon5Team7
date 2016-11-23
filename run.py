#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
"""
import requests


BASE_URL = 'https://staging-adp.dsd.io/api/case_workers/claims?api_key=bbef1c5f-0ded-43d2-8d53-5a6358659dac&status=unallocated&scheme=agfs&filter=all&sorting=id&direction=asc&limit=100'



def main():
    data = requests.get(BASE_URL).json()


if __name__ == '__main__':
    main()
