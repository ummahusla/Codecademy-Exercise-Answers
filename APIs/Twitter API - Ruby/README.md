#Exercises

## Exercise 1. Verifying Credentials

In this exercise we have to register a [new application](https://apps.twitter.com/) and copy the consumer_key y access_token in script.rb, the code should look like this:

~~~
require 'rubygems'
require 'oauth'

# Change the following values to those provided on dev.twitter.com
# The consumer key identifies the application making the request.
# The access token identifies the user making the request.
consumer_key = OAuth::Consumer.new(
    "YOUR_CONSUMER_KEY",
    "YOU_CONSUMER_SECRET")
access_token = OAuth::Token.new(
    "YOUR_ACCESS_TOKEN",
    "YOUR_ACCESS_SECRET")

# All requests will be sent to this server.
baseurl = "https://api.twitter.com"

# The verify credentials endpoint returns a 200 status if
# the request is signed correctly.
address = URI("#{baseurl}/1.1/account/verify_credentials.json")

# Set up Net::HTTP to use SSL, which is required by Twitter.
http = Net::HTTP.new address.host, address.port
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_PEER

# Build the request and authorize it with OAuth.
request = Net::HTTP::Get.new address.request_uri
request.oauth! http, consumer_key, access_token

# Issue the request and return the response.
http.start
response = http.request request
puts "The response status was #{response.code}"

~~~


## Exercise 2. Parsing a User Object

We have to add a dependency for the json package, access the HTTP response body and decode the response with JSON-encoded.

For the dependecy use `require 'json'`

For acces the HTTP response body use `response.body`

For decode , `user = JSON.parse(response.body)`

The code should look like this:

~~~
require 'rubygems'
require 'oauth'
require 'json'

# Parse a response from the API and return a user object.
def parse_user_response(response)
  user = nil

  # Check for a successful request
  if response.code == '200'
    # Parse the response body, which is in JSON format.
    # ADD CODE TO PARSE THE RESPONSE BODY HERE
    user = JSON.parse(response.body)

    # Pretty-print the user object to see what data is available.
    puts "Hello, #{user["screen_name"]}!"
  else
    # There was an error issuing the request.
    puts "Expected a response of 200 but got #{response.code} instead"
  end

  user
end

# All requests will be sent to this server.
baseurl = "https://api.twitter.com"

# Verify credentials returns the current user in the body of the response.
address = URI("#{baseurl}/1.1/account/verify_credentials.json")

# Set up HTTP.
http             = Net::HTTP.new address.host, address.port
http.use_ssl     = true
http.verify_mode = OpenSSL::SSL::VERIFY_PEER

# If you entered your credentials in the previous
# exercise, no need to enter them again here. The
# ||= operator will only assign these values if
# they are not already set.
consumer_key ||= OAuth::Consumer.new "ENTER IN EXERCISE 1", ""
access_token ||= OAuth::Token.new "ENTER IN EXERCISE 1", ""

# Issue the request.
request = Net::HTTP::Get.new address.request_uri
request.oauth! http, consumer_key, access_token
http.start
response = http.request(request)

user = parse_user_response(response)

~~~


##Exercise 3. Reading a Tweet

We have to change te tweet id for `266270116780576768` and print in one line the username and the tweet text.

For change the id, `query = URI.encode_www_form("id" => "266270116780576768")`

For pint username - tweet_text, `puts tweet["user"]["name"] + " - " + tweet["text"]`

If you have problem with print username-text use this `puts "Raffi Krikorian" + " - " + tweet["text"]

The code should look like this:

~~~
require 'rubygems'
require 'oauth'
require 'json'

# Now you will fetch /1.1/statuses/show.json, which
# takes an 'id' parameter and returns the
# representation of a single Tweet.
baseurl = "https://api.twitter.com"
path    = "/1.1/statuses/show.json"
query   = URI.encode_www_form("id" => "266270116780576768")
address = URI("#{baseurl}#{path}?#{query}")
request = Net::HTTP::Get.new address.request_uri

# Print data about a Tweet
def print_tweet(tweet)
    puts tweet["user"]["name"] + " - " + tweet["text"]
end

# Set up HTTP.
http             = Net::HTTP.new address.host, address.port
http.use_ssl     = true
http.verify_mode = OpenSSL::SSL::VERIFY_PEER

# If you entered your credentials in the first
# exercise, no need to enter them again here. The
# ||= operator will only assign these values if
# they are not already set.
consumer_key ||= OAuth::Consumer.new "ENTER IN EXERCISE 1", ""
access_token ||= OAuth::Token.new "ENTER IN EXERCISE 1", ""

# Issue the request.
request.oauth! http, consumer_key, access_token
http.start
response = http.request request

# Parse and print the Tweet if the response code was 200
tweet = nil
if response.code == '200' then
  tweet = JSON.parse(response.body)
  print_tweet(tweet)
end
~~~


##Exercise 4. Reading a Timeline

In this exercise we have to add an implementation of `print_timeline` and set the count parameter in the resquest to 10.

For `print_timeline`:

~~~
def print_timeline(tweets)
    tweets.each do |tweet|
        puts tweet["text"]
    end

end
~~~

For set the count:

~~~
query = URI.encode_www_form(
"screenname" => "twitterapi",
"count" => 10,
)
~~~

The code should look like this:

~~~
require 'rubygems'
require 'oauth'
require 'json'

baseurl = "https://api.twitter.com"
path    = "/1.1/statuses/user_timeline.json"
query = URI.encode_www_form(
"screenname" => "twitterapi",
"count" => 10,
)
address = URI("#{baseurl}#{path}?#{query}")
request = Net::HTTP::Get.new address.request_uri

def print_timeline(tweets)
    tweets.each do |tweet|
        puts tweet["text"]
    end

end

http             = Net::HTTP.new address.host, address.port
http.use_ssl     = true
http.verify_mode = OpenSSL::SSL::VERIFY_PEER

consumer_key ||= OAuth::Consumer.new "ENTER IN EXERCISE 1", ""
access_token ||= OAuth::Token.new "ENTER IN EXERCISE 1", ""

request.oauth! http, consumer_key, access_token
http.start
response = http.request request

tweets = nil
if response.code == '200' then
  tweets = JSON.parse(response.body)
  print_timeline(tweets)
end
~~~

##Exercise 5. Sending a Tweet

Your application type must be "read and write"

After that, we have to copy in the code

* Consumer key

* Consumer secret

* Access token

* Access secret

Finally, change the value of status for the text you wish to Tweet

~~~
request.set_form_data(
  "status" => "your tweet",
)
~~~

The code should look like this:

~~~
require 'rubygems'
require 'oauth'
require 'json'

# You will need to set your application type to
# read/write on dev.twitter.com and regenerate your access
# token.  Enter the new values here:
consumer_key = OAuth::Consumer.new(
  "consumer key",
  "consumer secret ")
access_token = OAuth::Token.new(
  "access token",
  "access secret")

# Note that the type of request has changed to POST.
# The request parameters have also moved to the body
# of the request instead of being put in the URL.
baseurl = "https://api.twitter.com"
path    = "/1.1/statuses/update.json"
address = URI("#{baseurl}#{path}")
request = Net::HTTP::Post.new address.request_uri
request.set_form_data(
  "status" => "your tweet",
)

# Set up HTTP.
http             = Net::HTTP.new address.host, address.port
http.use_ssl     = true
http.verify_mode = OpenSSL::SSL::VERIFY_PEER

# Issue the request.
request.oauth! http, consumer_key, access_token
http.start
response = http.request request

# Parse and print the Tweet if the response code was 200
tweet = nil
if response.code == '200' then
  tweet = JSON.parse(response.body)
  puts "Successfully sent #{tweet["text"]}"
else
  puts "Could not send the Tweet! " +
  "Code:#{response.code} Body:#{response.body}"
end
~~~