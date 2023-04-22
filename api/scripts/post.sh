#!/bin/bash
API="https://private-5a988-cos550aimeelramirezapi.apiary-mock.com"
URL_PATH="/api"
TOKEN=$OPENAI_API_KEY
curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  -H "Content-Type: application/json" \
  --data '{
   "prompt":"In a NABRE bible religious belief, is God real? Provide a verse from NABRE."
  }'
echo
