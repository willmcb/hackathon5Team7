import requests
from flask import Flask, render_template, send_from_directory
from flask_restful import Resource, Api, reqparse, abort

import os

PWD = os.path.abspath(os.path.dirname(__file__))

app = Flask(__name__)
api = Api(app)

KEY = 'bbef1c5f-0ded-43d2-8d53-5a6358659dac'
BASE = 'https://staging-adp.dsd.io/api'
CLAIMS_ENDPOINT = (
    '{}/case_workers/claims?api_key={}&status=unallocated&scheme=agfs'
    '&filter=all&sorting=id&direction=asc&limit=1').format(BASE, KEY)
CLAIM_ENDPOINT = '{}/claims'.format(BASE, KEY)


parser = reqparse.RequestParser()
parser.add_argument(
    'caseNumber', type=str,
    help='Rate to charge for this resource')


class Adaptor(Resource):

    def get(self):
        try:
            args = parser.parse_args()
            data = requests.get(
                CLAIMS_ENDPOINT + '&search=' + args.caseNumber).json()
            print(data)
            item = data['items'][0]
            case_number = item['case_number']
            if case_number != args.caseNumber:
                raise Exception
            uuid = item['uuid']
            url = CLAIM_ENDPOINT + '/' + uuid + '?api_key={}'.format(KEY)
            result = requests.get(url).json()
            return result
        except Exception:
            return abort(404, message='Not Found')


@app.route('/css/<path:path>')
def send_css(path):
    return send_from_directory('css', path)


@app.route('/js/<path:path>')
def send_js(path):
    return send_from_directory('js', path)


@app.route('/bootstrap-3.3.7/<path:path>')
def send_bootstrap(path):
    return send_from_directory('bootstrap-3.3.7', path)


@app.route('/')
def search_html():
    # ff = os.path.join(PWD, 'searchPage.html')
    return render_template('searchPage.html')


api.add_resource(Adaptor, '/search')

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)
