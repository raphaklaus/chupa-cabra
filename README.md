[![Build Status](https://travis-ci.org/raphaklaus/chupa-cabra.png)](https://travis-ci.org/raphaklaus/chupa-cabra)

# chupa-cabra
Javascript tool to automatically get body's content from HTTP/HTTPS request and concatenate to a file.

## Installing

    npm install -g chupa-cabra 

## How to use
Just run the ```chupa-cabra``` and when it asks for the URL you can:

##### 1) Use an interval notation
    https://www.google.com.br/search?q=test&start=[0,100,10]

It means from 0 to 100 incremented by 10. All the 10 pages will be dumped into a text file, in this case, as HTML. 

    http://api.example.com/resource?page=[0,1000,100]

In this case from 0 to 1000 incremented by 100. The JSON result will be appended into a txt file.

##### 2) Or single URL
    https://www.google.com
Gets the HTML content for just this page. 
