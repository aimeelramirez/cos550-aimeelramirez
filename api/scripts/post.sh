#!/bin/bash
API="http://localhost:3000"
URL_PATH="/api"
TOKEN=$OPENAI_API_KEY
curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  -H "Content-Type: application/json" \
  -d '{
   "body":"In a NABRE bible religious belief, is God real? Provide a verse from NABRE."
  }'
echo
