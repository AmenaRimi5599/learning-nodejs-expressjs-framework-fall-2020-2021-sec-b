<!DOCTYPE html>
<html>
<head>
	<title>Details Page</title>
</head>
<body>
	<a href="{{route('home.stdlist')}}">Back</a> |
	<a href="/logout">logout</a>
	<br>

		<table border="1">
			<tr>
				<td>name</td>
				<td>{{$name}}</td>
			</tr>
			<tr>
				<td>companyName</td>
				<td>{{$companyName}}</td>
			</tr>
			<tr>
				<td>contactNo</td>
				<td>{{$contactNo}}</td>
			</tr>
			<tr>
				<td>Username</td>
				<td>{{$username}}</td>
			</tr>
			<tr>
				<td>Password</td>
				<td>{{$password}}</td>
			</tr>
			<tr>
				<td>userType</td>
				<td>{{$userType}}</td>
			</tr>
		</table>
		
</body>
</html>