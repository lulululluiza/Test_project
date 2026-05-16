### API Tests - Test Cases
#### Collection Variables used:
- baseUrl: https://restful-booker.herokuapp.com
- authToken: Created when running "Authentification/Create Token", used later when updating and deleting bookings
bookingId: Created when running "Happy path/Create booking", used when a especific id is needed for a request.
Obs.: To guarantee the correct creation of the variables above, is recommended to run the scripts in the order below (that's also the script's order in the API folder)
Obs.2: Given the nature of the API, the token and the booking created get sporadically unavailable. In case a test fails, run "Authentification/Create Token" and "Happy path/Create booking" and then try to run the failed tests again.

#### Authentification
**Test Case:** Create token
**Endpoint:** https://restful-booker.herokuapp.com/auth
**Method:** POST
**Request Body:**
```
{
    "username" : "admin",
    "password" : "password123"
}
```
**Expected Response:**
```
{
    "token": "TOKEN_VALUE"
}
```
**Actual Response:** The expected one
**Status:** Pass

**Test Case:** Health check
**Endpoint:** https://restful-booker.herokuapp.com/ping
**Method:** GET
**Request Body:** None
**Expected Response:** A 201 status
**Actual Response:** The expected one
**Status:** Pass


#### Happy path
**Test Case:** Get all bookings
**Endpoint:** https://restful-booker.herokuapp.com/booking
**Method:** GET
**Request Body:** None
**Expected Response:** Json with all booking IDs
**Actual Response:** The expected one
**Status:** Pass

**Test Case:** Create booking
**Endpoint:** https://restful-booker.herokuapp.com/booking
**Method:** POST
**Request Body:** 
```
{
    "firstname" : "Luiza",
    "lastname" : "Person",
    "totalprice" : 50,
    "depositpaid" : true,
    "bookingdates" : 
    {
        "checkin" : "2026-03-06",
        "checkout" : "2026-05-12" 
    },
    "additionalneeds" : "Water"
}
```
**Expected Response:** Json with all booking IDs
**Actual Response:** The expected one
**Status:** Pass

**Test Case:** Get a booking by id
**Endpoint:** https://restful-booker.herokuapp.com/booking/:id
**Method:** GET
**Path Variables:** Id, {{bookingId}}
**Request Body:** None
**Expected Response:** Json with the matching booking by ID
**Actual Response:** The expected one
**Status:** Pass

**Test Case:** Update booking
**Endpoint:** https://restful-booker.herokuapp.com/booking/:id
**Method:** PUT
**Header:** Cookie, token={{authToken}}
**Path Variables:** Id, {{bookingId}}
**Request Body:** 
```
{
    "firstname" : "Luiza",
    "lastname" : "Person",
    "totalprice" : 50,
    "depositpaid" : true,
    "bookingdates" : 
    {
        "checkin" : "2026-03-06",
        "checkout" : "2026-05-12"
    },
    "additionalneeds" : "Dinner"
}
```
**Expected Response:** Same value as the body
**Actual Response:** The expected one
**Status:** Pass

**Test Case:** Partial update booking
**Endpoint:** https://restful-booker.herokuapp.com/booking/:id
**Method:** PATCH
**Header:** Cookie, token={{authToken}}
**Path Variables:** Id, {{bookingId}}
**Request Body:** 
```
{
    "firstname": "Luizas",
    "lastname": "Luizason"
}
```
**Expected Response:** 
```
Expected Response:
{
    "firstname": "Luizas",
    "lastname": "Luizason",
    "totalprice": 50,
    "depositpaid": true,
    "bookingdates": {
        "checkin": "2026-03-06",
        "checkout": "2026-05-12"
    },
    "additionalneeds": "Dinner"
}
```
**Actual Response:** The expected one
**Status:** Pass

**Test Case:** Delete booking
**Endpoint:** https://restful-booker.herokuapp.com/booking/:id
**Method:** DELETE
**Header:** Cookie, token={{authToken}}
**Path Variables:** Id, {{bookingId}}
**Request Body:** None
**Expected Response:** 201 status
**Actual Response:** The expected one
**Status:** Pass


#### Validations
##### GetBooking
**Test Case:** Get a booking by id as json
**Endpoint:** https://restful-booker.herokuapp.com/booking/:id
**Method:** GET
**Header:** Accept, application/json
**Request Body:** None
**Expected Response:** The booking of the ID in json
**Actual Response:** The expected one
**Status:** Pass

**Test Case:** Get a booking with a empty id
**Endpoint:** https://restful-booker.herokuapp.com/booking/:id
**Method:** GET
**Path Variables:** id, leave empty
**Request Body:** None
**Expected Response:** An error message and status 404 Not Found
**Actual Response:** The expected one
**Status:** Pass

**Test Case:** Get a booking with wrong id
**Endpoint:** https://restful-booker.herokuapp.com/booking/:id
**Method:** GET
**Path Variables:** id, 9999999999
**Request Body:** None
**Expected Response:** An error message and status 404 Not Found
**Actual Response:** The expected one
**Status:** Pass

**Test Case:** Get a booking by id as xml
**Endpoint:** https://restful-booker.herokuapp.com/booking/:id
**Method:** GET
**Header:** Accept, application/xml
**Request Body:** None
**Expected Response:** The booking of the ID in xml
**Actual Response:** The expected one
**Status:** Pass


##### GetBookingIds
**Test Case:** Get all bookings with a existing firstname
**Endpoint:** https://restful-booker.herokuapp.com/booking?firstname=value
**Method:** GET
**Query Params:** firstname, Sally
**Request Body:** None
**Expected Response:** All bookings with firstname = Sally
**Actual Response:** The expected one
**Status:** Pass

**Test Case:** Get all bookings with a not existing firstname
**Endpoint:** https://restful-booker.herokuapp.com/booking?firstname=value
**Method:** GET
**Query Params:** firstname, Person That Totally Exists
**Request Body:** None
**Expected Response:** A json with a empty array
**Actual Response:** The expected one
**Status:** Pass

**Test Case:** Get all bookings filter by lastname
**Endpoint:** https://restful-booker.herokuapp.com/booking?lastname=value
**Method:** GET
**Query Params:** lastname, Smith
**Request Body:** None
**Expected Response:** All bookings with lastname = Smith
**Actual Response:** The expected one
**Status:** Pass

**Test Case:** Get all bookings with a non existing lastname
**Endpoint:** https://restful-booker.herokuapp.com/booking?lastname=value
**Method:** GET
**Query Params:** lastname, Lastname That Totally Exists
**Request Body:** None
**Expected Response:** A json with a empty array
**Actual Response:** The expected one
**Status:** Pass

**Test Case:** Get all bookings filter by checkin
**Endpoint:** https://restful-booker.herokuapp.com/booking?checkin=value
**Method:** GET
**Query Params:** checkin, 2020-01-01
**Request Body:** None
**Expected Response:** All bookings with checkin = 2020-01-01
**Actual Response:** Checkins that don't match the parameter
**Status:** Fail
**Evidence:** ![Filter by checkin not working](/API%20tests/evidences/filter_booking_checkin.png)

**Test Case:** Get all bookings with a non existing checkin
**Endpoint:** https://restful-booker.herokuapp.com/booking?checkin=value
**Method:** GET
**Query Params:** checkin, 2020-01-02
**Request Body:** None
**Expected Response:** An empty json
**Actual Response:** Checkins that don't match the parameter
**Status:** Fail
**Evidence:** ![Filter by non existing checkin not working](/API%20tests/evidences/filter_non_existing_booking_checkin.png)

**Test Case:** Get all bookings filter by checkout
**Endpoint:** https://restful-booker.herokuapp.com/booking?checkout=value
**Method:** GET
**Query Params:** checkout, 2020-01-01
**Request Body:** None
**Expected Response:** All bookings with checkout = 2020-01-01
**Actual Response:** Checkouts that don't match the parameter
**Status:** Fail
**Evidence:** ![Filter by checkout not working](/API%20tests/evidences/filter_booking_chechout.png)

**Test Case:** Get all bookings with a non existing checkout
**Endpoint:** https://restful-booker.herokuapp.com/booking?checkout=value
**Method:** GET
**Query Params:** checkout, 2020-01-02
**Request Body:** None
**Expected Response:** An empty json
**Actual Response:** Checkouts that don't match the parameter
**Status:** Fail
**Evidence:** ![Filter by non existing checkout not working](/API%20tests/evidences/filter_non_existing_booking_chechout.png)

**Test Case:** Get all bookings filter by all optional parameters
**Endpoint:** https://restful-booker.herokuapp.com/booking?firstname=value&lastname=value&checkin=value&checkout=value
**Method:** GET
**Query Params:** 
- firstname, Luiza
- lastname, Person
- checkin, 2026-03-06
- checkout, 2026-05-12
**Request Body:** None
**Expected Response:** A single booking
**Actual Response:** An empty json
**Status:** Fail
**Evidence:** ![Filter by all options not working](/API%20tests/evidences/filter_booking_all_options.png)
**Obs.:** The problem seens to be on fields checkin and checkout, removing them from the request and the body is the expected one.



##### CreateBooking
**Test Case:** Create a booking without header Content-Type
**Endpoint:** https://restful-booker.herokuapp.com/booking
**Method:** POST
**Header:** None (make sure Content-Type: application/json is disabled, in case it's hidden)
**Request Body:** 
```
{
    "firstname" : "Luiza",
    "lastname" : "Person",
    "totalprice" : 50,
    "depositpaid" : true,
    "bookingdates" : 
    {
        "checkin" : "2026-03-06",
        "checkout" : "2026-05-12"
    },
    "additionalneeds" : "Water"
}
```
**Expected Response:** A error message and status 500 Internal Server Error
**Actual Response:** The expected one
**Status:** Pass

**Test Case:** Create a booking without header Accept
**Endpoint:** https://restful-booker.herokuapp.com/booking
**Method:** POST
**Header:** None (make sure Accept: */* is disabled, in case it's hidden)
**Request Body:** 
```
{
    "firstname" : "Luiza",
    "lastname" : "Person",
    "totalprice" : 50,
    "depositpaid" : true,
    "bookingdates" : 
    {
        "checkin" : "2026-03-06",
        "checkout" : "2026-05-12"
    },
    "additionalneeds" : "Water"
}
```
**Expected Response:** A error message and status 418 I'm a teapot (RFC 2324)
**Actual Response:** The expected one
**Status:** Pass


**Test Case:** Create a booking where header Content-Type value is wrong
**Endpoint:** https://restful-booker.herokuapp.com/booking
**Method:** POST
**Header:** Content-Type: jaison
**Request Body:** 
```
{
    "firstname" : "Luiza",
    "lastname" : "Person",
    "totalprice" : 50,
    "depositpaid" : true,
    "bookingdates" : 
    {
        "checkin" : "2026-03-06",
        "checkout" : "2026-05-12"
    },
    "additionalneeds" : "Water"
}
```
**Expected Response:** A error message and status 500 Internal Server Error
**Actual Response:** The expected one
**Status:** Pass

**Test Case:** Create a booking where header Accept value is wrong 
**Endpoint:** https://restful-booker.herokuapp.com/booking
**Method:** POST
**Header:** Accept: ultimate/format
**Request Body:** 
```
{
    "firstname" : "Luiza",
    "lastname" : "Person",
    "totalprice" : 50,
    "depositpaid" : true,
    "bookingdates" : 
    {
        "checkin" : "2026-03-06",
        "checkout" : "2026-05-12"
    },
    "additionalneeds" : "Water"
}
```
**Expected Response:** A error message and status 418 I'm a teapot (RFC 2324)
**Actual Response:** The expected one
**Status:** Pass

**Test Case:** Create a booking without firstname
**Endpoint:** https://restful-booker.herokuapp.com/booking
**Method:** POST
**Request Body:** 
```
{
    "lastname" : "Person",
    "totalprice" : 50,
    "depositpaid" : true,
    "bookingdates" : 
    {
        "checkin" : "2026-03-06",
        "checkout" : "2026-05-12"
    },
    "additionalneeds" : "Water"
}
```
**Expected Response:** A error message and status 500 Internal Server Error
**Actual Response:** The expected one
**Status:** Pass

**Test Case:** Create a booking without lastname
**Endpoint:** https://restful-booker.herokuapp.com/booking
**Method:** POST
**Request Body:** 
```
{
    "firstname" : "Luiza",
    "totalprice" : 50,
    "depositpaid" : true,
    "bookingdates" : 
    {
        "checkin" : "2026-03-06",
        "checkout" : "2026-05-12"
    },
    "additionalneeds" : "Water"
}
```
**Expected Response:** A error message and status 500 Internal Server Error
**Actual Response:** The expected one
**Status:** Pass

**Test Case:** Create a booking without totalprice
**Endpoint:** https://restful-booker.herokuapp.com/booking
**Method:** POST
**Request Body:** 
```
{
    "firstname" : "Luiza",
    "lastname" : "Person",
    "depositpaid" : true,
    "bookingdates" : 
    {
        "checkin" : "2026-03-06",
        "checkout" : "2026-05-12"
    },
    "additionalneeds" : "Water"
}
```
**Expected Response:** A error message and status 500 Internal Server Error
**Actual Response:** The expected one
**Status:** Pass

**Test Case:** Create a booking without depositpaid
**Endpoint:** https://restful-booker.herokuapp.com/booking
**Method:** POST
**Request Body:** 
```
{
    "firstname" : "Luiza",
    "lastname" : "Person",
    "totalprice" : 50,
    "bookingdates" : 
    {
        "checkin" : "2026-03-06",
        "checkout" : "2026-05-12"
    },
    "additionalneeds" : "Water"
}
```
**Expected Response:** A error message and status 500 Internal Server Error
**Actual Response:** The expected one
**Status:** Pass

**Test Case:** Create a booking without bookingdates
**Endpoint:** https://restful-booker.herokuapp.com/booking
**Method:** POST
**Request Body:** 
```
{
    "firstname" : "Luiza",
    "lastname" : "Person",
    "totalprice" : 50,    
    "depositpaid" : true,
    "additionalneeds" : "Water"
}
```
**Expected Response:** A error message and status 500 Internal Server Error
**Actual Response:** The expected one
**Status:** Pass

**Test Case:** Create a booking without checkin
**Endpoint:** https://restful-booker.herokuapp.com/booking
**Method:** POST
**Request Body:** 
```
{
    "firstname" : "Luiza",
    "lastname" : "Person",
    "totalprice" : 50,    
    "depositpaid" : true,
    "bookingdates" : 
    {
        "checkout" : "2026-05-12"
    },
    "additionalneeds" : "Water"
}
```
**Expected Response:** A error message and status 500 Internal Server Error
**Actual Response:** The expected one
**Status:** Pass

**Test Case:** Create a booking without checkout
**Endpoint:** https://restful-booker.herokuapp.com/booking
**Method:** POST
**Request Body:** 
```
{
    "firstname" : "Luiza",
    "lastname" : "Person",
    "totalprice" : 50,    
    "depositpaid" : true,
    "bookingdates" : 
    {
        "checkin" : "2026-03-06"
    },
    "additionalneeds" : "Water"
}
```
**Expected Response:** A error message and status 500 Internal Server Error
**Actual Response:** The expected one
**Status:** Pass

**Test Case:** Create a booking without additionalneeds
**Endpoint:** https://restful-booker.herokuapp.com/booking
**Method:** POST
**Request Body:** 
```
{
    "firstname" : "Luiza",
    "lastname" : "Person",
    "totalprice" : 50,    
    "depositpaid" : true,
    "bookingdates" : 
    {
        "checkin" : "2026-03-06",
        "checkout" : "2026-05-12"
    }
}
```
**Expected Response:** A error message and status 500 Internal Server Error
**Actual Response:** The booking as created without the attribute additionalneeds
**Status:** Fail
**Evidence:** ![Create booking without additional needs](/API%20tests/evidences/create_booking_without_additionalneeds.png)
**Obs.:** The documentation doesn't mentioned it being optional.


##### UpdateBooking
**Test Case:** Update a booking without header Content-Type
**Endpoint:** https://restful-booker.herokuapp.com/booking/:id
**Method:** PUT
**Header:** 
- Cookie: token={{authToken}}
- Make sure Content-Type: application/json is disabled, in case it's hidden
**Path Variables:** id, {{bookingId}}
**Request Body:** 
```
{
    "firstname" : "Luiza",
    "lastname" : "Person",
    "totalprice" : 50,
    "depositpaid" : true,
    "bookingdates" : 
    {
        "checkin" : "2026-03-06",
        "checkout" : "2026-05-12"
    },
    "additionalneeds" : "Water"
}
```
**Expected Response:** A error message and status 400 Bad Request
**Actual Response:** The expected one
**Status:** Pass

**Test Case:** Update a booking where header Content-Type value is wrong
**Endpoint:** https://restful-booker.herokuapp.com/booking/:id
**Method:** PUT
**Header:** 
- Content-Type: jaison
- Cookie: token={{authToken}}
**Path Variables:** id, {{bookingId}}
**Request Body:** 
```
{
    "firstname" : "Luiza",
    "lastname" : "Person",
    "totalprice" : 50,
    "depositpaid" : true,
    "bookingdates" : 
    {
        "checkin" : "2026-03-06",
        "checkout" : "2026-05-12"
    },
    "additionalneeds" : "Water"
}
```
**Expected Response:** A error message and status 400 Bad Request
**Actual Response:** The expected one
**Status:** Pass

**Test Case:** Update a booking without header Accept
**Endpoint:** https://restful-booker.herokuapp.com/booking/:id
**Method:** PUT
**Header:** 
- Cookie: token={{authToken}}
- Make sure Accept: */* is disabled, in case it's hidden
**Path Variables:** id, {{bookingId}}
**Request Body:** 
```
{
    "firstname" : "Luiza",
    "lastname" : "Person",
    "totalprice" : 50,
    "depositpaid" : true,
    "bookingdates" : 
    {
        "checkin" : "2026-03-06",
        "checkout" : "2026-05-12"
    },
    "additionalneeds" : "Water"
}
```
**Expected Response:** A error message and status 405 Method Not Allowed
**Actual Response:** The expected one
**Status:** Pass

**Test Case:** Update a booking where header Accept value is wrong 
**Endpoint:** https://restful-booker.herokuapp.com/booking/:id
**Method:** PUT
**Header:** 
- Cookie: token={{authToken}}
- Accept: ultimate/format
**Path Variables:** id, {{bookingId}}
**Request Body:** 
```
{
    "firstname" : "Luiza",
    "lastname" : "Person",
    "totalprice" : 50,
    "depositpaid" : true,
    "bookingdates" : 
    {
        "checkin" : "2026-03-06",
        "checkout" : "2026-05-12"
    },
    "additionalneeds" : "Water"
}
```
**Expected Response:** A error message and status 418 I'm a teapot (RFC 2324)
**Actual Response:** The expected one
**Status:** Pass

*Test Case:** Update a booking without firstname
**Endpoint:** https://restful-booker.herokuapp.com/booking/:id
**Method:** PUT
**Header:** 
- Cookie: token={{authToken}}
**Path Variables:** id, {{bookingId}}
**Request Body:** 
```
{
    "lastname" : "Person",
    "totalprice" : 50,
    "depositpaid" : true,
    "bookingdates" : 
    {
        "checkin" : "2026-03-06",
        "checkout" : "2026-05-12"
    },
    "additionalneeds" : "Water"
}
```
**Expected Response:** A error message and status 400 Bad Request
**Actual Response:** The expected one
**Status:** Pass

**Test Case:** Update a booking without lastname
**Endpoint:** https://restful-booker.herokuapp.com/booking/:id
**Method:** PUT
**Header:** 
- Cookie: token={{authToken}}
**Path Variables:** id, {{bookingId}}
**Request Body:** 
```
{
    "firstname" : "Luiza",
    "totalprice" : 50,
    "depositpaid" : true,
    "bookingdates" : 
    {
        "checkin" : "2026-03-06",
        "checkout" : "2026-05-12"
    },
    "additionalneeds" : "Water"
}
```
**Expected Response:** A error message and status 400 Bad Request
**Actual Response:** The expected one
**Status:** Pass

**Test Case:** Update a booking without totalprice
**Endpoint:** https://restful-booker.herokuapp.com/booking/:id
**Method:** PUT
**Header:** 
- Cookie: token={{authToken}}
**Path Variables:** id, {{bookingId}}
**Request Body:** 
```
{
    "firstname" : "Luiza",
    "lastname" : "Person",
    "depositpaid" : true,
    "bookingdates" : 
    {
        "checkin" : "2026-03-06",
        "checkout" : "2026-05-12"
    },
    "additionalneeds" : "Water"
}
```
**Expected Response:** A error message and status 400 Bad Request
**Actual Response:** The expected one
**Status:** Pass

**Test Case:** Update a booking without depositpaid
**Endpoint:** https://restful-booker.herokuapp.com/booking/:id
**Method:** PUT
**Header:** 
- Cookie: token={{authToken}}
**Path Variables:** id, {{bookingId}}
**Request Body:** 
```
{
    "firstname" : "Luiza",
    "lastname" : "Person",
    "totalprice" : 50,
    "bookingdates" : 
    {
        "checkin" : "2026-03-06",
        "checkout" : "2026-05-12"
    },
    "additionalneeds" : "Water"
}
```
**Expected Response:** A error message and status 400 Bad Request
**Actual Response:** The expected one
**Status:** Pass

**Test Case:** Update a booking without bookingdates
**Endpoint:** https://restful-booker.herokuapp.com/booking/:id
**Method:** PUT
**Header:** 
- Cookie: token={{authToken}}
**Request Body:** 
```
{
    "firstname" : "Luiza",
    "lastname" : "Person",
    "totalprice" : 50,    
    "depositpaid" : true,
    "additionalneeds" : "Water"
}
```
**Expected Response:** A error message and status 400 Bad Request
**Actual Response:** The expected one
**Status:** Pass

**Test Case:** Update a booking without checkin
**Endpoint:** https://restful-booker.herokuapp.com/booking/:id
**Method:** PUT
**Header:** 
- Cookie: token={{authToken}}
**Request Body:** 
```
{
    "firstname" : "Luiza",
    "lastname" : "Person",
    "totalprice" : 50,    
    "depositpaid" : true,
    "bookingdates" : 
    {
        "checkout" : "2026-05-12"
    },
    "additionalneeds" : "Water"
}
```
**Expected Response:** A error message and status 400 Bad Request
**Actual Response:** The expected one
**Status:** Pass

**Test Case:** Update a booking without checkout
**Endpoint:** https://restful-booker.herokuapp.com/booking/:id
**Method:** PUT
**Header:** 
- Cookie: token={{authToken}}
**Request Body:** 
```
{
    "firstname" : "Luiza",
    "lastname" : "Person",
    "totalprice" : 50,    
    "depositpaid" : true,
    "bookingdates" : 
    {
        "checkin" : "2026-03-06"
    },
    "additionalneeds" : "Water"
}
```
**Expected Response:** A error message and status 400 Bad Request
**Actual Response:** The expected one
**Status:** Pass

**Test Case:** Update a booking without additionalneeds
**Endpoint:** https://restful-booker.herokuapp.com/booking/:id
**Method:** PUT
**Header:** 
- Cookie: token={{authToken}}
**Request Body:** 
```
{
    "firstname" : "Luiza",
    "lastname" : "Person",
    "totalprice" : 50,    
    "depositpaid" : true,
    "bookingdates" : 
    {
        "checkin" : "2026-03-06",
        "checkout" : "2026-05-12"
    }
}
```
**Expected Response:** A error message and status 400 Bad Request
**Actual Response:** The booking as created without the attribute additionalneeds
**Status:** Fail
**Evidence:** ![Update booking without additional needs](/API%20tests/evidences/update_booking_without_additionalneeds.png)
**Obs.:** The documentation doesn't mentioned it being optional.


##### PartialUpdateBooking
*Test Case:** Partial update a booking only with firstname
**Endpoint:** https://restful-booker.herokuapp.com/booking/:id
**Method:** PATCH
**Header:** 
- Cookie: token={{authToken}}
**Path Variables:** id, {{bookingId}}
**Request Body:** 
```
{
    "firstname" : "Someone"
}
```
**Expected Response:** 
```
{
    "firstname": "Someone",
    "lastname": "Person",
    "totalprice": 50,
    "depositpaid": true,
    "bookingdates": {
        "checkin": "2026-03-06",
        "checkout": "2026-05-12"
    },
    "additionalneeds": "Water"
}
```
**Actual Response:** The expected one
**Status:** Pass

**Test Case:** Partial update a booking only with lastname
**Endpoint:** https://restful-booker.herokuapp.com/booking/:id
**Method:** PATCH
**Header:** 
- Cookie: token={{authToken}}
**Path Variables:** id, {{bookingId}}
**Request Body:** 
```
{
    "lastname": "Someoneson",
}
```
**Expected Response:** 
```
{
    "firstname": "Someone",
    "lastname": "Someoneson",
    "totalprice": 50,
    "depositpaid": true,
    "bookingdates": {
        "checkin": "2026-03-06",
        "checkout": "2026-05-12"
    },
    "additionalneeds": "Water"
}
```
**Actual Response:** The expected one
**Status:** Pass

**Test Case:** Partial update a booking only with totalprice
**Endpoint:** https://restful-booker.herokuapp.com/booking/:id
**Method:** PATCH
**Header:** 
- Cookie: token={{authToken}}
**Path Variables:** id, {{bookingId}}
**Request Body:** 
```
{
    "totalprice": 999
}
```
**Expected Response:** 
```
{
    "firstname": "Someone",
    "lastname": "Someoneson",
    "totalprice": 999,
    "depositpaid": true,
    "bookingdates": {
        "checkin": "2026-03-06",
        "checkout": "2026-05-12"
    },
    "additionalneeds": "Water"
}
```
**Actual Response:** The expected one
**Status:** Pass

**Test Case:** Partial update a booking only with depositpaid
**Endpoint:** https://restful-booker.herokuapp.com/booking/:id
**Method:** PATCH
**Header:** 
- Cookie: token={{authToken}}
**Path Variables:** id, {{bookingId}}
**Request Body:** 
```
{
    "depositpaid": false
}
```
**Expected Response:**
```
{
    "firstname": "Someone",
    "lastname": "Someoneson",
    "totalprice": 999,
    "depositpaid": false,
    "bookingdates": {
        "checkin": "2026-03-06",
        "checkout": "2026-05-12"
    },
    "additionalneeds": "Water"
}
```
**Actual Response:** The expected one
**Status:** Pass

**Test Case:** Partial update a booking only with checkin
**Endpoint:** https://restful-booker.herokuapp.com/booking/:id
**Method:** PATCH
**Header:** 
- Cookie: token={{authToken}}
**Request Body:** 
```
{
    "bookingdates": {
        "checkin": "2026-03-18"
    }
}
```
**Expected Response:** 
```
{
    "firstname": "Someone",
    "lastname": "Someoneson",
    "totalprice": 999,
    "depositpaid": false,
    "bookingdates": {
        "checkin": "2026-03-18",
        "checkout": "2026-05-12"
    },
    "additionalneeds": "Water"
}
```
**Actual Response:** checkin has been modified, but checkout is now invalid (0NaN-aN-aN)
**Status:** Fail
**Evidence:** ![Partial update of checkin bugs checkout](/API%20tests/evidences/partial_update_booking_checkin.png)
**Obs.:** The documentation doesn't mentioned that both fields need to be updated together.

**Test Case:** Partial update a booking only with checkin
**Endpoint:** https://restful-booker.herokuapp.com/booking/:id
**Method:** PATCH
**Header:** 
- Cookie: token={{authToken}}
**Request Body:** 
```
{
    "bookingdates": {
        "checkout": "2026-05-15"
    }
}
```
**Expected Response:** 
```
{
    "firstname": "Someone",
    "lastname": "Someoneson",
    "totalprice": 999,
    "depositpaid": false,
    "bookingdates": {
        "checkin": "2026-03-18",
        "checkout": "2026-05-15"
    },
    "additionalneeds": "Water"
}
```
**Actual Response:** checkout has been modified, but checkin is now invalid (0NaN-aN-aN)
**Status:** Fail
**Evidence:** ![Partial update of checkout bugs checkout](/API%20tests/evidences/partial_update_booking_checkout.png)
**Obs.:** The documentation doesn't mentioned that both fields need to be updated together.

**Test Case:** Partial update a booking only with additionalneeds
**Endpoint:** https://restful-booker.herokuapp.com/booking/:id
**Method:** PATCH
**Header:** 
- Cookie: token={{authToken}}
**Request Body:** 
```
{
    "additionalneeds": "Juice"
}
```
**Expected Response:**
```
{
    "firstname": "Someone",
    "lastname": "Someoneson",
    "totalprice": 999,
    "depositpaid": false,
    "bookingdates": {
        "checkin": "2026-03-18",
        "checkout": "2026-05-15"
    },
    "additionalneeds": "Juice"
}
```
**Actual Response:** The booking as created without the attribute additionalneeds
**Status:** Fail
**Evidence:** ![Update booking without additional needs](/API%20tests/evidences/update_booking_without_additionalneeds.png)
**Obs.:** The documentation doesn't mentioned it being optional.

##### DeleteBooking
**Test Case:** Delete a booking without id
**Endpoint:** https://restful-booker.herokuapp.com/booking
**Method:** Delete
**Header:** 
- Cookie: token={{authToken}}
**Request Body:** None
**Expected Response:** A error message and status 404 Not Found
**Actual Response:** The expected one
**Status:** Pass




#### Suggestions/Observations:
- The documentation doesn't mentioned what is expected if there's any problem with the request, if it returns a message or a status code. I included tests validating the status codes as they showed up in the request, but that information should be in the documentation too.