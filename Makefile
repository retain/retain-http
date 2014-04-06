TESTS = test/spec/server
REPORTER = spec
MOCHA = ./node_modules/mocha/bin/mocha
_MOCHA = ./node_modules/mocha/bin/_mocha
ISTANBUL = ./node_modules/istanbul/lib/cli.js

BROWSERIFY = ./node_modules/browserify/bin/cmd.js

server:
	node test/fixtures/server/server.js --start

client:
	node test/fixtures/client/server.js

test: test-server

test-browser: compile client

test-server:
	$(MOCHA) --timeout 200 $(TESTS) --reporter spec

compile:
	$(BROWSERIFY) test/spec/client/client.js -o test/fixtures/client/index.js

test-cov: istanbul

istanbul:
	$(ISTANBUL) cover $(_MOCHA) -- -R spec test/spec/server

coveralls:
	cat ./coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js

clean:
	rm -rf ./coverage