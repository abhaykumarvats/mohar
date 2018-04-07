# Table of Contents
* [Introduction](#introduction)
    * [Features](#features)
* [Documentaion](#documentation)
* [Fun Fact](#fun-fact)

# Introduction
Mohar is a RESTful web API that can be used to convert UNIX timestamp to natural date and vice versa.

## Features
* [Convert UNIX Timestamp to Natural Date](#convert-unix-timestamp-to-natural-date)
* [Convert Natural Date to UNIX Timestamp](#convert-natural-date-to-unix-timestamp)

# Documentation
__Base URL:__ `https://mohar.herokuapp.com`

## Convert UNIX Timestamp to Natural Date

* __URL__

    `/<unix-timestamp>`

* __Method__

    `GET`

* __Success Response__

    * __Code:__ 200 OK
    * __Content:__

        ```json
        {
            "unix":855772200000,
            "natural":"Wed Feb 12 1997 18:30:00 GMT+0000 (UTC)"
        }
        ```

* __Error Response__

    * __Code:__ 200 OK
    * __Content:__

        ```json
        {
            "unix":null,
            "natural":null
        }
        ```

* __Sample Call__

    ```
    curl --request GET \
      --url 'https://mohar.herokuapp.com/855772200000'
    ```

* __Note__

    You get Error Response when provided UNIX timestamp is invalid (e.g., 8557722hello).

## Convert Natural Date to UNIX Timestamp

* __URL__

    `/<natural-datestring>`

* __Method__

    `GET`

* __Success Response__

    * __Code:__ 200 OK
    * __Content:__

        ```json
        {
            "unix":855792000000,
            "natural":"Thu Feb 13 1997 00:00:00 GMT+0000 (UTC)"
        }
        ```

* __Error Response__

    * __Code:__ 200 OK
    * __Content:__

        ```json
        {
            "unix":null,
            "natural":null
        }
        ```

* __Sample Call__

    ```
    curl --request GET \
      --url 'https://mohar.herokuapp.com/February%2013,%201997'
    ```

* __Note__

    You get Error Response when provided datestring is invalid (e.g., February 13, 1997). Use escape characters and correct spellings.

# Fun Fact
'Mohar' in Hindi means 'Stamp'.

#### Signing-off v1.0, Abhay Kumar
