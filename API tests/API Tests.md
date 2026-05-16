### API Tests - Test Cases
#### Collection Variables used:
- **baseUrl:** https://restful-booker.herokuapp.com
- **authToken:** Created when running "Authentification/Create Token", used later when updating and deleting bookings
bookingId: Created when running "Happy path/Create booking", used when a especific id is needed for a request.
**Obs.:** To guarantee the correct creation of the variables above, is recommended to run the scripts in the order below (that's also the script's order in the API folder)
**Obs.2:** Given the nature of the API, the token and the booking created get sporadically unavailable. In case a test fails, run "Authentification/Create Token" and "Happy path/Create booking" and then try to run the failed tests again.

#### Authentification
**Test Case:** Create token<br>
**Endpoint:** https://restful-booker.herokuapp.com/auth<br>
**Method:** POST<br>
**Request Body:**<br>
```
{
    "username" : "admin",
    "password" : "password123"
}
```
**Expected Response:**<br>
```
{
    "token": "TOKEN_VALUE"
}
```
**Actual Response:** The expected one<br>
**Status:** Pass<br>

**Test Case:** Health check<br>
**Endpoint:** https://restful-booker.herokuapp.com/ping<br>
**Method:** GET<br>
**Request Body:** None<br>
**Expected Response:** A 201 status<br>
**Actual Response:** The expected one<br>
**Status:** Pass<br>


#### Happy path
**Test Case:** Get all bookings<br>
**Endpoint:** https://restful-booker.herokuapp.com/booking<br>
**Method:** GET<br>
**Request Body:** None<br>
**Expected Response:** Json with all booking IDs<br>
**Actual Response:** The expected one<br>
**Status:** Pass<br>

**Test Case:** Create booking<br>
**Endpoint:** https://restful-booker.herokuapp.com/booking
**Method:** POST<br>
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
**Expected Response:** Json with all booking IDs<br>
**Actual Response:** The expected one<br>
**Status:** Pass<br>

**Test Case:** Get a booking by id<br>
**Endpoint:** https://restful-booker.herokuapp.com/booking/:id
**Method:** GET<br>
**Path Variables:** Id, {{bookingId}}<br>
**Request Body:** None<br>
**Expected Response:** Json with the matching booking by ID<br>
**Actual Response:** The expected one<br>
**Status:** Pass<br>

**Test Case:** Update booking<br>
**Endpoint:** https://restful-booker.herokuapp.com/booking/:id<br>
**Method:** PUT<br>
**Header:** Cookie, token={{authToken}}<br>
**Path Variables:** Id, {{bookingId}}<br>
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
**Expected Response:** Same value as the body<br>
**Actual Response:** The expected one<br>
**Status:** Pass<br>

**Test Case:** Partial update booking<br>
**Endpoint:** https://restful-booker.herokuapp.com/booking/:id<br>
**Method:** PATCH<br>
**Header:** Cookie, token={{authToken}}<br>
**Path Variables:** Id, {{bookingId}}<br>
**Request Body:** <br>
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
**Actual Response:** The expected one<br>
**Status:** Pass<br>

**Test Case:** Delete booking<br>
**Endpoint:** https://restful-booker.herokuapp.com/booking/:id<br>
**Method:** DELETE<br>
**Header:** Cookie, token={{authToken}}<br>
**Path Variables:** Id, {{bookingId}}<br>
**Request Body:** None<br>
**Expected Response:** 201 status<br>
**Actual Response:** The expected one<br>
**Status:** Pass<br>


#### Validations
##### GetBooking
**Test Case:** Get a booking by id as json<br>
**Endpoint:** https://restful-booker.herokuapp.com/booking/:id<br>
**Method:** GET<br>
**Header:** Accept, application/json<br>
**Request Body:** None<br>
**Expected Response:** The booking of the ID in json<br>
**Actual Response:** The expected one<br>
**Status:** Pass<br>

**Test Case:** Get a booking with a empty id<br>
**Endpoint:** https://restful-booker.herokuapp.com/booking/:id<br>
**Method:** GET<br>
**Path Variables:** id, leave empty<br>
**Request Body:** None<br>
**Expected Response:** An error message and status 404 Not Found<br>
**Actual Response:** The expected one<br>
**Status:** Pass<br>

**Test Case:** Get a booking with wrong id<br>
**Endpoint:** https://restful-booker.herokuapp.com/booking/:id<br>
**Method:** GET<br>
**Path Variables:** id, 9999999999<br>
**Request Body:** None<br>
**Expected Response:** An error message and status 404 Not Found<br>
**Actual Response:** The expected one<br>
**Status:** Pass<br>

**Test Case:** Get a booking by id as xml<br>
**Endpoint:** https://restful-booker.herokuapp.com/booking/:id<br>
**Method:** GET<br>
**Header:** Accept, application/xml<br>
**Request Body:** None<br>
**Expected Response:** The booking of the ID in xml<br>
**Actual Response:** The expected one<br>
**Status:** Pass<br>


##### GetBookingIds
**Test Case:** Get all bookings with a existing firstname<br>
**Endpoint:** https://restful-booker.herokuapp.com/booking?firstname=value<br>
**Method:** GET<br>
**Query Params:** firstname, Sally<br>
**Request Body:** None<br>
**Expected Response:** All bookings with firstname = Sally<br>
**Actual Response:** The expected one<br>
**Status:** Pass<br>

**Test Case:** Get all bookings with a not existing firstname<br>
**Endpoint:** https://restful-booker.herokuapp.com/booking?firstname=value<br>
**Method:** GET<br>
**Query Params:** firstname, Person That Totally Exists<br>
**Request Body:** None<br>
**Expected Response:** A json with a empty array<br>
**Actual Response:** The expected one<br>
**Status:** Pass<br>

**Test Case:** Get all bookings filter by lastname<br>
**Endpoint:** https://restful-booker.herokuapp.com/booking?lastname=value<br>
**Method:** GET<br>
**Query Params:** lastname, Smith<br>
**Request Body:** None<br>
**Expected Response:** All bookings with lastname = Smith<br>
**Actual Response:** The expected one<br>
**Status:** Pass<br>

**Test Case:** Get all bookings with a non existing lastname<br>
**Endpoint:** https://restful-booker.herokuapp.com/booking?lastname=value<br>
**Method:** GET<br>
**Query Params:** lastname, Lastname That Totally Exists<br>
**Request Body:** None<br>
**Expected Response:** A json with a empty array<br>
**Actual Response:** The expected one<br>
**Status:** Pass<br>

**Test Case:** Get all bookings filter by checkin<br>
**Endpoint:** https://restful-booker.herokuapp.com/booking?checkin=value<br>
**Method:** GET<br>
**Query Params:** checkin, 2020-01-01<br>
**Request Body:** None<br>
**Expected Response:** All bookings with checkin = 2020-01-01<br>
**Actual Response:** Checkins that don't match the parameter<br>
**Status:** Fail<br>
**Evidence:** ![Filter by checkin not working](/API%20tests/evidences/filter_booking_checkin.png)<br>

**Test Case:** Get all bookings with a non existing checkin<br>
**Endpoint:** https://restful-booker.herokuapp.com/booking?checkin=value<br>
**Method:** GET<br>
**Query Params:** checkin, 2020-01-02<br>
**Request Body:** None<br>
**Expected Response:** An empty json<br>
**Actual Response:** Checkins that don't match the parameter<br>
**Status:** Fail<br>
**Evidence:** ![Filter by non existing checkin not working](/API%20tests/evidences/filter_non_existing_booking_checkin.png)<br>

**Test Case:** Get all bookings filter by checkout<br>
**Endpoint:** https://restful-booker.herokuapp.com/booking?checkout=value<br>
**Method:** GET<br>
**Query Params:** checkout, 2020-01-01<br>
**Request Body:** None<br>
**Expected Response:** All bookings with checkout = 2020-01-01<br>
**Actual Response:** Checkouts that don't match the parameter<br>
**Status:** Fail<br>
**Evidence:** ![Filter by checkout not working](/API%20tests/evidences/filter_booking_chechout.png)<br>

**Test Case:** Get all bookings with a non existing checkout<br>
**Endpoint:** https://restful-booker.herokuapp.com/booking?checkout=value<br>
**Method:** GET<br>
**Query Params:** checkout, 2020-01-02<br>
**Request Body:** None<br>
**Expected Response:** An empty json<br>
**Actual Response:** Checkouts that don't match the parameter<br>
**Status:** Fail<br>
**Evidence:** ![Filter by non existing checkout not working](/API%20tests/evidences/filter_non_existing_booking_chechout.png)<br>

**Test Case:** Get all bookings filter by all optional parameters<br>
**Endpoint:** https://restful-booker.herokuapp.com/booking?firstname=value&lastname=value&checkin=value&checkout=value<br>
**Method:** GET<br>
**Query Params:** <br>
- firstname, Luiza<br>
- lastname, Person<br>
- checkin, 2026-03-06<br>
- checkout, 2026-05-12<br>
**Request Body:** None<br>
**Expected Response:** A single booking<br>
**Actual Response:** An empty json<br>
**Status:** Fail<br>
**Evidence:** ![Filter by all options not working](/API%20tests/evidences/filter_booking_all_options.png)<br>
**Obs.:** The problem seens to be on fields checkin and checkout, removing them from the request and the body is the expected one.<br>



##### CreateBooking
**Test Case:** Create a booking without header Content-Type<br>
**Endpoint:** https://restful-booker.herokuapp.com/booking<br>
**Method:** POST<br>
**Header:** None (make sure Content-Type: application/json is disabled, in case it's hidden)<br>
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
**Expected Response:** A error message and status 500 Internal Server Error<br>
**Actual Response:** The expected one<br>
**Status:** Pass<br>

**Test Case:** Create a booking without header Accept<br>
**Endpoint:** https://restful-booker.herokuapp.com/booking<br>
**Method:** POST<br>
**Header:** None (make sure Accept: */* is disabled, in case it's hidden)<br>
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
**Expected Response:** A error message and status 418 I'm a teapot (RFC 2324)<br>
**Actual Response:** The expected one<br>
**Status:** Pass<br>


**Test Case:** Create a booking where header Content-Type value is wrong<br>
**Endpoint:** https://restful-booker.herokuapp.com/booking<br>
**Method:** POST<br>
**Header:** Content-Type: jaison<br>
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
**Expected Response:** A error message and status 500 Internal Server Error<br>
**Actual Response:** The expected one<br>
**Status:** Pass<br>

**Test Case:** Create a booking where header Accept value is wrong <br>
**Endpoint:** https://restful-booker.herokuapp.com/booking<br>
**Method:** POST<br>
**Header:** Accept: ultimate/format<br>
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
**Expected Response:** A error message and status 418 I'm a teapot (RFC 2324)<br>
**Actual Response:** The expected one<br>
**Status:** Pass<br>

**Test Case:** Create a booking without firstname<br>
**Endpoint:** https://restful-booker.herokuapp.com/booking<br>
**Method:** POST<br>
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
**Expected Response:** A error message and status 500 Internal Server Error<br>
**Actual Response:** The expected one<br>
**Status:** Pass<br>

**Test Case:** Create a booking without lastname<br>
**Endpoint:** https://restful-booker.herokuapp.com/booking<br>
**Method:** POST<br>
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
**Expected Response:** A error message and status 500 Internal Server Error<br>
**Actual Response:** The expected one<br>
**Status:** Pass<br>

**Test Case:** Create a booking without totalprice<br>
**Endpoint:** https://restful-booker.herokuapp.com/booking<br>
**Method:** POST<br>
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
**Expected Response:** A error message and status 500 Internal Server Error<br>
**Actual Response:** The expected one<br>
**Status:** Pass<br>

**Test Case:** Create a booking without depositpaid<br>
**Endpoint:** https://restful-booker.herokuapp.com/booking<br>
**Method:** POST<br>
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
**Expected Response:** A error message and status 500 Internal Server Error<br>
**Actual Response:** The expected one<br>
**Status:** Pass<br>

**Test Case:** Create a booking without bookingdates<br>
**Endpoint:** https://restful-booker.herokuapp.com/booking<br>
**Method:** POST<br>
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
**Expected Response:** A error message and status 500 Internal Server Error<br>
**Actual Response:** The expected one<br>
**Status:** Pass<br>

**Test Case:** Create a booking without checkin<br>
**Endpoint:** https://restful-booker.herokuapp.com/booking<br>
**Method:** POST<br>
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
**Expected Response:** A error message and status 500 Internal Server Error<br>
**Actual Response:** The expected one<br>
**Status:** Pass<br>

**Test Case:** Create a booking without checkout<br>
**Endpoint:** https://restful-booker.herokuapp.com/booking<br>
**Method:** POST<br>
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
**Expected Response:** A error message and status 500 Internal Server Error<br>
**Actual Response:** The expected one<br>
**Status:** Pass<br>

**Test Case:** Create a booking without additionalneeds<br>
**Endpoint:** https://restful-booker.herokuapp.com/booking<br>
**Method:** POST<br>
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
**Expected Response:** A error message and status 500 Internal Server Error<br>
**Actual Response:** The booking as created without the attribute additionalneeds<br>
**Status:** Fail<br>
**Evidence:** ![Create booking without additional needs](/API%20tests/evidences/create_booking_without_additionalneeds.png)<br>
**Obs.:** The documentation doesn't mentioned it being optional.<br>


##### UpdateBooking
**Test Case:** Update a booking without header Content-Type<br>
**Endpoint:** https://restful-booker.herokuapp.com/booking/:id<br>
**Method:** PUT<br>
**Header:** 
- Cookie: token={{authToken}}<br>
- Make sure Content-Type: application/json is disabled, in case it's hidden<br>
**Path Variables:** id, {{bookingId}}<br>
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
**Expected Response:** A error message and status 400 Bad Request<br>
**Actual Response:** The expected one<br>
**Status:** Pass<br>

**Test Case:** Update a booking where header Content-Type value is wrong<br>
**Endpoint:** https://restful-booker.herokuapp.com/booking/:id<br>
**Method:** PUT<br>
**Header:** 
- Content-Type: jaison
- Cookie: token={{authToken}}
**Path Variables:** id, {{bookingId}}<br>
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
**Expected Response:** A error message and status 400 Bad Request<br>
**Actual Response:** The expected one<br>
**Status:** Pass<br>

**Test Case:** Update a booking without header Accept<br>
**Endpoint:** https://restful-booker.herokuapp.com/booking/:id<br>
**Method:** PUT<br>
**Header:** 
- Cookie: token={{authToken}}
- Make sure Accept: */* is disabled, in case it's hidden
**Path Variables:** id, {{bookingId}}<br>
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
**Expected Response:** A error message and status 405 Method Not Allowed<br>
**Actual Response:** The expected one<br>
**Status:** Pass<br>

**Test Case:** Update a booking where header Accept value is wrong<br> 
**Endpoint:** https://restful-booker.herokuapp.com/booking/:id<br>
**Method:** PUT<br>
**Header:** 
- Cookie: token={{authToken}}
- Accept: ultimate/format
**Path Variables:** id, {{bookingId}}<br>
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
**Expected Response:** A error message and status 418 I'm a teapot (RFC 2324)<br>
**Actual Response:** The expected one<br>
**Status:** Pass<br>

*Test Case:** Update a booking without firstname<br>
**Endpoint:** https://restful-booker.herokuapp.com/booking/:id<br>
**Method:** PUT<br>
**Header:** 
- Cookie: token={{authToken}}
**Path Variables:** id, {{bookingId}}<br>
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
**Expected Response:** A error message and status 400 Bad Request<br>
**Actual Response:** The expected one<br>
**Status:** Pass<br>

**Test Case:** Update a booking without lastname<br>
**Endpoint:** https://restful-booker.herokuapp.com/booking/:id<br>
**Method:** PUT<br>
**Header:** 
- Cookie: token={{authToken}}
**Path Variables:** id, {{bookingId}}<br>
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
**Expected Response:** A error message and status 400 Bad Request<br>
**Actual Response:** The expected one<br>
**Status:** Pass<br>

**Test Case:** Update a booking without totalprice<br>
**Endpoint:** https://restful-booker.herokuapp.com/booking/:id<br>
**Method:** PUT<br>
**Header:** 
- Cookie: token={{authToken}}
**Path Variables:** id, {{bookingId}}<br>
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
**Expected Response:** A error message and status 400 Bad Request<br>
**Actual Response:** The expected one<br>
**Status:** Pass<br>

**Test Case:** Update a booking without depositpaid<br>
**Endpoint:** https://restful-booker.herokuapp.com/booking/:id<br>
**Method:** PUT<br>
**Header:** 
- Cookie: token={{authToken}}
**Path Variables:** id, {{bookingId}}<br>
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
**Expected Response:** A error message and status 400 Bad Request<br>
**Actual Response:** The expected one<br>
**Status:** Pass<br>

**Test Case:** Update a booking without bookingdates<br>
**Endpoint:** https://restful-booker.herokuapp.com/booking/:id<br>
**Method:** PUT<br>
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
**Expected Response:** A error message and status 400 Bad Request<br>
**Actual Response:** The expected one<br>
**Status:** Pass<br>

**Test Case:** Update a booking without checkin<br>
**Endpoint:** https://restful-booker.herokuapp.com/booking/:id<br>
**Method:** PUT<br>
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
**Expected Response:** A error message and status 400 Bad Request<br>
**Actual Response:** The expected one<br>
**Status:** Pass<br>

**Test Case:** Update a booking without checkout<br>
**Endpoint:** https://restful-booker.herokuapp.com/booking/:id<br>
**Method:** PUT<br>
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
**Expected Response:** A error message and status 400 Bad Request<br>
**Actual Response:** The expected one<br>
**Status:** Pass<br>

**Test Case:** Update a booking without additionalneeds<br>
**Endpoint:** https://restful-booker.herokuapp.com/booking/:id<br>
**Method:** PUT<br>
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
**Expected Response:** A error message and status 400 Bad Request<br>
**Actual Response:** The booking as created without the attribute additionalneeds<br>
**Status:** Fail<br>
**Evidence:** ![Update booking without additional needs](/API%20tests/evidences/update_booking_without_additionalneeds.png)<br>
**Obs.:** The documentation doesn't mentioned it being optional.<br>


##### PartialUpdateBooking
*Test Case:** Partial update a booking only with firstname<br>
**Endpoint:** https://restful-booker.herokuapp.com/booking/:id<br>
**Method:** PATCH<br>
**Header:** 
- Cookie: token={{authToken}}
**Path Variables:** id, {{bookingId}}<br>
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
**Actual Response:** The expected one<br>
**Status:** Pass<br>

**Test Case:** Partial update a booking only with lastname<br>
**Endpoint:** https://restful-booker.herokuapp.com/booking/:id<br>
**Method:** PATCH<br>
**Header:** 
- Cookie: token={{authToken}}
**Path Variables:** id, {{bookingId}}<br>
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
**Actual Response:** The expected one<br>
**Status:** Pass<br>

**Test Case:** Partial update a booking only with totalprice<br>
**Endpoint:** https://restful-booker.herokuapp.com/booking/:id<br>
**Method:** PATCH<br>
**Header:** 
- Cookie: token={{authToken}}
**Path Variables:** id, {{bookingId}}<br>
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
**Actual Response:** The expected one<br>
**Status:** Pass<br>

**Test Case:** Partial update a booking only with depositpaid<br>
**Endpoint:** https://restful-booker.herokuapp.com/booking/:id<br>
**Method:** PATCH<br>
**Header:** 
- Cookie: token={{authToken}}
**Path Variables:** id, {{bookingId}}<br>
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
**Actual Response:** The expected one<br>
**Status:** Pass<br>

**Test Case:** Partial update a booking only with checkin<br>
**Endpoint:** https://restful-booker.herokuapp.com/booking/:id<br>
**Method:** PATCH<br>
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
**Actual Response:** checkin has been modified, but checkout is now invalid (0NaN-aN-aN)<br>
**Status:** Fail<br>
**Evidence:** ![Partial update of checkin bugs checkout](/API%20tests/evidences/partial_update_booking_checkin.png)<br>
**Obs.:** The documentation doesn't mentioned that both fields need to be updated together.<br>

**Test Case:** Partial update a booking only with checkin<br>
**Endpoint:** https://restful-booker.herokuapp.com/booking/:id<br>
**Method:** PATCH<br>
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
**Actual Response:** checkout has been modified, but checkin is now invalid (0NaN-aN-aN)<br>
**Status:** Fail<br>
**Evidence:** ![Partial update of checkout bugs checkout](/API%20tests/evidences/partial_update_booking_checkout.png)<br>
**Obs.:** The documentation doesn't mentioned that both fields need to be updated together.<br>

**Test Case:** Partial update a booking only with additionalneeds<br>
**Endpoint:** https://restful-booker.herokuapp.com/booking/:id<br>
**Method:** PATCH<br>
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
**Actual Response:** The booking as created without the attribute additionalneeds<br>
**Status:** Fail<br>
**Evidence:** ![Update booking without additional needs](/API%20tests/evidences/update_booking_without_additionalneeds.png)<br>
**Obs.:** The documentation doesn't mentioned it being optional.<br>

##### DeleteBooking
**Test Case:** Delete a booking without id<br>
**Endpoint:** https://restful-booker.herokuapp.com/booking<br>
**Method:** Delete<br>
**Header:** 
- Cookie: token={{authToken}}
**Request Body:** None<br>
**Expected Response:** A error message and status 404 Not Found<br>
**Actual Response:** The expected one<br>
**Status:** Pass<br>




#### Suggestions/Observations:
- The documentation doesn't mentioned what is expected if there's any problem with the request, if it returns a message or a status code. I included tests validating the status codes as they showed up in the request, but that information should be in the documentation too.
