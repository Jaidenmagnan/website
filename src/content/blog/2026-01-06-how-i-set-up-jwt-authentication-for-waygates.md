---
uid: oLjLvfzJPufvYtMqkyDV
title: How I Set Up JWT Authentication for Waygates
slug: how-i-set-up-jwt-authentication-for-waygates
alias: 
pubDate: 2026-01-06T18:07:00+00:00
all tags: devlog, waygates
make discoverable: True
is page: False
canonical url: 
meta image: 
lang: 
class name: 
first published at: 2026-01-06T18:07:00+00:00
---

> Here is devlog #2 for the waygates project. This is how I setup JWT authentication in Go using Gin. As always [here](https://github.com/Jaidenmagnan/waygates) is a link to the repository on Github.

User authentication consists of three endpoints: `/signin`, `/signout`, and `/signup`.

The `/signin` endpoint has the following flow:
1. Check if the email is in our database and grab the hashed password.
2. Hash the password from the request.
3. Check if the password from the request matches the password in the database.
4. Create a JWT token which stores the user ID and store it in a cookie.

Doing this specifically in Go was not much different than other languages. We manage our cookies, request, and response all through the Gin context as seen here. One part of the language I do like is the way Gin handles custom request objects. We were easily able to verify the email without really adding any additional code and it was quite readable.

```go
func (h *AuthHandler) Signin(c *gin.Context) {
	// ...
	c.SetSameSite(http.SameSiteLaxMode)
	c.SetCookie("Authorization", tokenString, 7*24*60*60, "/", "", true, true)
	c.Header("HX-Redirect", "/")
	c.Status(http.StatusOK)
}
```


The `/signup` endpoint consisted of the following:
1. Check if the email already exists.
2. If not, hash the password and store this user in the database.

With all these database operations I wanted to make a small aside here on how easy it is to query the database with Go. All of my repositories are just wrappers around SQL calls, which means there really is no barrier to entry with this language. Take this function to create the user in the `/signup` endpoint. **It's literally just SQL**.

```go
// Create a new user in the database.
func (r *UserRepository) Create(user models.CreateUser) (models.User, error) {
	query := "INSERT INTO users (email, username, password) VALUES (?, ?, ?)"
	
	result, err := r.db.Exec(query, user.Email, user.Username, user.Password)
	if err != nil {
		return models.User{}, err
	}

	id, err := result.LastInsertId()
	if err != nil {
		return models.User{}, err
	}


	return models.User{
		ID: int(id),
		Email: user.Email,
		Username: user.Username,
		Password: user.Password,
	}, nil
}
```

The `/signout` endpoint clears the JWT token stored in the cookie as shown here:

```go
// Signout handles user signout requests by clearing the Authorization cookie.
func (h *AuthHandler) Signout(c *gin.Context) {
	c.SetCookie("Authorization", "", -1, "", "", true, true)
	c.Header("HX-Redirect", "/signin")
	c.Status(http.StatusOK)
}
```


Significant progress on waygates this time around. So far what I like about Go is how verbose it is and easy to debug. I will have another post soon detailing this, but it makes typical debugging just part of writing the code. The docs for Go have been incredibly helpful and this language reads well.