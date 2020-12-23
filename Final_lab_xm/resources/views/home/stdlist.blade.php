<!DOCTYPE html>
<html>
<head>
	<title>Student List</title>
</head>
<body>
	<a href="/home">Back</a> |
	<a href="/logout">logout</a>
	<br>

	<div><input type="text" name="search" placeholder="Search..." id="search"></div>

	<table border="1">
		<tr>
			<td>Id</td>
			<td>name</td>
			<td>companyName</td>
			<td>contactNo</td>
			<td>Username</td>
			<td>Type</td>
			<td>Action</td>
		</tr>

		@for($i=0; $i < count($students); $i++)
		

			<tr>
				<td>{{$students[$i]['id']}}</td>
				<td>{{$students[$i]['name']}}</td>
				<td>{{$students[$i]['companyName']}}</td>
				<td>{{$students[$i]['contactNo']}}</td>
				<td>{{$students[$i]['username']}}</td>
				<td>{{$students[$i]['userType']}}</td>
				
				<td>
					<a href="{{route('home.edit', $students[$i]['id'])}}">Edit </a> |
					<a href="{{route('home.show', $students[$i]['id'])}}">Details </a> |
					<a href="/delete/{{$students[$i]['id']}}">Delete </a> 
				</td>
			</tr>

		@endfor


	</table>
</body>
</html>