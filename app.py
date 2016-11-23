import requests
from flask import Flask
from flask_restful import Resource, Api, reqparse, abort

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
    'search', type=str,
    help='Rate to charge for this resource')


class Adaptor(Resource):

    def get(self):
        try:
            args = parser.parse_args()
            data = requests.get(
                CLAIMS_ENDPOINT + '&search=' + args.search).json()
            print(data)
            item = data['items'][0]
            case_number = item['case_number']
            if case_number != args.search:
                raise Exception
            uuid = item['uuid']
            url = CLAIM_ENDPOINT + '/' + uuid + '?api_key={}'.format(KEY)
            result = requests.get(url).json()
            return result
        except Exception:
            return abort(404, message='Not Found')


api.add_resource(Adaptor, '/')

if __name__ == '__main__':
    app.run(debug=True)
