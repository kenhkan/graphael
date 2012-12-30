run:
	# Clean up first
	@rm -rf lib
	@mkdir lib
	# Copy files useful for individual includes
	@cp src/lib/* lib/
	# Concatenate one by one
	@cat src/lib/raphael.js > lib/main.js
	@cat src/lib/g.raphael.js >> lib/main.js
	@cat src/lib/g.bar.js >> lib/main.js
	@cat src/lib/g.dot.js >> lib/main.js
	@cat src/lib/g.line.js >> lib/main.js
	@cat src/lib/g.pie.js >> lib/main.js
	@cat src/lib/main.js >> lib/main.js
