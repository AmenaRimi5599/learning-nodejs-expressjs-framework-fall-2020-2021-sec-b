<!DOCTYPE html>
<html>
<head>
	<title>Home page</title>
</head>
<body>
	<h1>Welcome home! {{$username}}</h1>
	<a href="{{route('home.create')}}">Create New Student</a> |
	<a href="{{route('home.stdlist')}}">View Student List</a> |
	<a href="/logout">logout</a>
	<br>

</body>
</html>