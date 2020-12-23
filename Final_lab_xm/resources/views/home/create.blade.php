<!DOCTYPE html>
<html>
<head>
	<title>Home page</title>
</head>
<body>
	<a href="{{route('home.index')}}">Back</a> |
	<a href="/logout">logout</a>
	<br>


		<form method="post" enctype="multipart/form-data">

			<input type="hidden" name="_token" value="{{csrf_token()}}">
			<fieldset>
				<legend>Create User</legend>
			<table>
				<tr>
					<td>name</td>
					<td><input type="text" name="name" value="{{old('name')}}"></td>
				</tr>
				<tr>
					<td>companyName</td>
					<td><input type="text" name="companyName" value="{{old('username')}}"></td>
				</tr>
				<tr>
					<td>contactNo</td>
					<td><input type="text" name="contactNo" value="{{old('contactNo')}}"></td>
				</tr>
				<tr>
					<td>Username</td>
					<td><input type="text" name="username" value="{{old('username')}}"></td>
				</tr>
				<tr>
					<td>Password</td>
					<td><input type="password" name="password" value="{{old('password')}}"></td>
				</tr>
				<tr>
					<td>userType</td>
					<td><input type="text" name="userType" value="{{old('userType')}}"></td>
				</tr>
				<tr>
					<td></td>
					<td><input type="submit" name="submit" value="Submit"></td>
				</tr>
			</table>
			</fieldset>
		</form>

		@foreach($errors->all() as $err)
			{{$err}} <br>
		@endforeach
</body>
</html>