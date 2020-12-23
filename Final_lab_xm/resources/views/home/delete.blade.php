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
				<!-- <img src="{{asset('upload/$profile_img')}}">> -->
			<table border="1">
				<tr>
					<td>Username</td>
					<td>{{$username}}</td>
				</tr>
				<tr>
					<td>Password</td>
					<td>{{$password}}</td>
				</tr>
				<tr>
					<td>type</td>
					<td>{{$type}}</td>
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
