#!/bin/bash
API="http://localhost:4000"
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
