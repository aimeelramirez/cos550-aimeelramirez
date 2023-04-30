## Testing

### Scripts to test endpoints

- Run ``` sh ./scripts/chatgpt.sh```
``` 
HTTP/2 200 
date: Sun, 16 Apr 2023 01:44:25 GMT
content-type: application/json
content-length: 495
access-control-allow-origin: *
cache-control: no-cache, must-revalidate
openai-model: gpt-3.5-turbo-0301
openai-organization: user-opexdd9xyxwvj9duu32yozs2
openai-processing-ms: 2216
openai-version: 2020-10-01
strict-transport-security: max-age=15724800; includeSubDomains
x-ratelimit-limit-requests: 3500
x-ratelimit-remaining-requests: 3499
x-ratelimit-reset-requests: 17ms
x-request-id: fdc53b8645b4e4ca2780328e4328b937
cf-cache-status: DYNAMIC
server: cloudflare
cf-ray: 7b88be29cb1e42dc-EWR
alt-svc: h3=":443"; ma=86400, h3-29=":443"; ma=86400

{"id":"chatcmpl-75ljDwHKErqUpi1FiUgDlEMZ5YxO9","object":"chat.completion","created":1681609463,"model":"gpt-3.5-turbo-0301","usage":{"prompt_tokens":29,"completion_tokens":50,"total_tokens":79},"choices":[{"message":{"role":"assistant","content":"Yes, in the NABRE bible religious belief, God is believed to be real. \n\nOne verse from NABRE that supports this belief is:\n\n\"In the beginning, when God created the heavens and the earth...\" - Genesis 1:1"},"finish_reason":"stop","index":0}]}
```