<!DOCTYPE html>
<html>
<head>
	<title>Edit Page</title>
</head>
<body>
	<a href="{{route('home.stdlist')}}">Back</a> |
	<a href="/logout">logout</a>
	<br>


		<form method="post" >

			<input type="hidden" name="_token" value="{{csrf_token()}}">
			<fieldset>
				<legend>Edit User</legend>
			<table border="1">
				<tr>
					<td>Username</td>
					<td><input type="text" name="name" value="{{$name}}"></td>
				</tr>
				<tr>
					<td>Username</td>
					<td><input type="text" name="companyName" value="{{$companyName}}"></td>
				</tr>
				<tr>
					<td>Username</td>
					<td><input type="text" name="contactNo" value="{{$contactNo}}"></td>
				</tr>
				<tr>
					<td>Username</td>
					<td><input type="text" name="username" value="{{$username}}"></td>
				</tr>
				<tr>
					<td>Password</td>
					<td><input type="password" name="password" value="{{$password}}"></td>
				</tr>
				<tr>
					<td>type</td>
					<td><input type="text" name="userType" value="{{$userType}}"></td>
				</tr>
				<tr>
					<td></td>
					<td><input type="submit" name="submit" value="Update"></td>
				</tr>
			</table>
			</fieldset>
		</form>
</body>
</html>