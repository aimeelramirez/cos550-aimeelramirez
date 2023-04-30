#!/bin/bash
API="https://api.openai.com/v1/chat"

URL_PATH="/completions"
TOKEN=$OPENAI_API_KEY
curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer ${TOKEN}" \
  -d '{
    "model": "gpt-3.5-turbo",
    "messages": [{"role": "user",  "content": "In a NABRE bible religious belief, is God real? Provide a verse from NABRE."}]
  }'
echo
