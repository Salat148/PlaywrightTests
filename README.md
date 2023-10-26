# PlaywrightTests
# Login to wiki and change language


1. Clone repo 
2. Land inside project
3. Run ```docker build  --no-cache -t test:latest --build-arg URL={Fill Url} --build-arg PASSW={Fill pass} --build-arg USERNAME={Fill username} . ```
4. Run ```docker run -v {pwd}/reports:/app/playwright-report --rm test:latest```