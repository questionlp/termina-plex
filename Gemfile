# frozen_string_literal: true

source "https://rubygems.org"
gemspec

gem "jekyll", ENV["JEKYLL_VERSION"] if ENV["JEKYLL_VERSION"]
gem "kramdown-parser-gfm" if ENV["JEKYLL_VERSION"] == "~> 3.9"

gem "webrick", "~> 1.7"
gem "jekyll-paginate"

# Add gems that will no longer be included in Ruby >= 3.4.0
gem "bigdecimal", "~> 3.1.4"
gem "safe_yaml", "~> 1.0.5"
gem "base64", "~> 0.2.0"
gem "csv", "~> 3.3"
