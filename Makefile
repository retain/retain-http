TESTS = test/spec/server
TESTS_CLIENT = test/spec/server
REPORTER = spec
MOCHA = ./node_modules/mocha/bin/mocha
_MOCHA = ./node_modules/mocha/bin/_mocha
ISTANBUL = ./node_modules/istanbul/lib/cli.js

MOCHA_PHANTOM = ./node_modules/mocha-phantomjs/bin/mocha-phantomjs
BROWSERIFY = ./node_modules/browserify/bin/cmd.js

server:
	node test/fixtures/server/server.js

client:
	node test/fixtures/client/server.js

test: test-mocha

test-browser: compile test-phantom

test-mocha:
	$(MOCHA) --timeout 200 $(TESTS) --reporter spec

compile:
	$(BROWSERIFY) test/spec/client/client.js -o test/fixtures/client/index.js

test-phantom:
	$(MOCHA) --timeout 200 $(TESTS_CLIENT) --reporter spec

test-cov: istanbul

istanbul:
	$(ISTANBUL) cover $(_MOCHA) -- -R spec test/spec

coveralls:
	cat ./coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js

clean:
	rm -rf ./coverage