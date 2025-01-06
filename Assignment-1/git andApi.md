## Git  And Web Fundamentals Assginment

What i Have learnt in Git and Github

- Git is a Version control system , And github is web based git version control system where we store our repository

- Git is used record changes you made to the files over a period of time 

- We need to install the git in our local system to use it and we need to create account in github.com to use to 

- Workflow of Git is first we need to initialize the the repository and we need to add the files to the staging area . Staging is a temporary holding space where our changes to the files are stored we can add and remove the files in the staging area . Then we commit to the local repository where the changes are locally saved in our local machine . Then we push to the remote repository


**Git Commands i  learned**

- Commands for the initializing the git repository 

```c++
git init

// With the help of this command we can initialize repo in our local machine 
```

- Commands for adding the files into the staged area
 
 ```c++

 // To add a file to the staging area 

 git add <filename>

 // to add all changed files into the staging area 

 git add . 

 // to reset the files 

 git reset <filename>

 // To see the all changes you made in the local repository

 git status

 ```


- Commands for commiting the files from the stage area into the local repository 

 ```c++ 

git commit -m "Your commit message "


```


- Commands for syncing the local repository with remote repository 

```c++

git remote add origin <url of the remote repository>

// With the help of this command we can add the remote repository to the local repository

git push -u origin main



// With the help of this command we can push the files from the local repository to the remote repository

```

- Commands for syncing the remote repository with the local repository

```c++

git pull origin main

// With the help of this command we can pull the changes from the remote repository to the local repository

```


- Commands for creating the branch

```c++

git branch <branchname>

// we can create the branch in the local repository with this help

git checkout <branchname>

// we can switch to the specific  branchs with this command

 git branch -d <branchname>

// we can delete the branch with this command

git checkout -b <branchname>

// we can create and switch to the specifiic branch with this command

```

- Commands for merging our branch with the main branch


```c++

git merge <branchname>

// we can merge the branch with the main branch with this command

```

- Commands for the log

```c++

git log
// we can see the log of the commits we made in the local repository

```

- Workflow to merge our branch with the main branch

```c++

 // first we need to create the branch with the help of the command 
 git branch <branchname>

    // then we need to switch to the branch with the help of the command
     git checkout <branchname>

    // then we need to add the files to the staging area with the help of the command
     git add .

    // then we need to commit the files to the local repository by using
     git commit -m "Your commit message"

    // then we need to publish our branch to the remote repository by using the command
     git push -u origin <branchname>

    // then we need to raise a pull request in 

    // then the pr will be reviwed and branch will be merged 


```

- Merge and  Rebase and its differences

```c++

// Merge is a process of combining the changes of two branches into one branch . in this operation  our branch will be there after the merge

// Rebase is a process of moving the changes of one branch to another branch . in this operation our branch will be removed after the rebase


// commands of merge and rebase

git merge <branchname>

// we can merge the branch with the main branch with this command

git rebase <branchname>

// we can rebase the branch with the main branch with this command

// basically after the rebasing the old branch will be removed and the changes will be moved to the main branch . it preserves the  linearity

```


## Web And API Fundamentals Assignment

### What i have learnt in Web and API Fundamentals

- We  use http protocol to communicate between the client and the server . Http is a stateless protocol which menas it does not store the previous state

- We use the http methods to communicate between the client and the server . The main http methods are GET , POST , PUT , DELETE

- We use the GET method to get the data from the server . We use the POST method to send the data to the server . We use the PUT method to update the data in the server . We use the DELETE method to delete the data in the server


- Https is a upgrade over http in security . It used secure socket layer to  encrypt the data between client and server

- http status codes are used to know the status of the response . There are 5 types of status codes 1xx , 2xx , 3xx , 4xx , 5xx

    - http 2xx status codes are used to know the success of the request
    - http 4xx status codes are used to know the client side errors
    - http 5xx status codes are used to know the server side errors

- Some of the http status codes we use 
    - 200 : OK
    - 201 : Created
    - 204 : No Content
    - 400 : Bad Request
    - 401 : Unauthorized
    - 403 : Forbidden
    - 404 : Not Found
    - 500 : Internal Server Error
    - 502 : Bad Gateway


- We use Various headers in the http request to know the information about the request . Some of the  main headers are 
    - Content-Type : It tells the type of the content in the request
    - Accept : It tells the type of the content the client can accept
    - Authorization : It tells the authorization of the request
    - User-Agent : It tells the information about the user agent
    - Cache-Control : It tells the caching information of the request
    - Cookie : It tells the information about the cookies


- We use API (Application programming interface ) to communicate between the client and the server . 

- We use the API to get the data from the server and we use the API to send the data to the server

- REST stands for representational state transfer . It is an architectural style for designing api 

- We use CRUD operations in the API . CRUD stands for Create , Read , Update , Delete

- Soap is a alternative to the REST . It uses xml to communicate between the client and the server

- Graphql is a alternative to the REST . It uses the query language to communicate between the client and the server









