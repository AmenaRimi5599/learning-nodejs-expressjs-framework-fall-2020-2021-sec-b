<!DOCTYPE html>
<html>
<head>
	<title>Delete Page</title>
</head>
<body>
	<a href="{{route('home.stdlist')}}">Back</a> |
	<a href="/logout">logout</a>
	<br>


		<form method="post" >

			<input type="hidden" name="_token" value="{{csrf_token()}}">
			<fieldset>
				<legend>Delete User</legend>
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
				<tr>
					<td colspan="2" style="color: red">Are you sure ?</td>
				</tr>
				<tr>
					<td colspan="2"><input type="submit" name="submit" value="Confirm"></td>
				</tr>
			</table>
			</fieldset>
		</form>
</body>
</html>
