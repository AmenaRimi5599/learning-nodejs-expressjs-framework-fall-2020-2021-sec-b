<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Http\Requests\studentRequest;
use Validator;
use App\User;

class homeController extends Controller
{

    public function index(Request $req){
        return view('home.index', ['username'=> $req->session()->get('username')]);
    	
    }

    public function stdlist(){
        $students = User::all();
    	return view('home.stdlist')->with('students', $students);
    }

	public function show($id){
    	
        $std = User::find($id);
        return view('home.show', $std);
    }

    public function create(){
    
    	return view('home.create');
    }

    public function store(studentRequest $req){

        $user = new User();

        $user->name        = $req->name;
        $user->username    = $req->username;
        $user->companyName = $req->companyName;
        $user->contactNo   = $req->contactNo;
        $user->password    = $req->password;
        $user->userType    = $req->userType;

        if($user->save()){
            return redirect()->route('home.stdlist');
        }else{
            echo "error";
        }

    }


    public function edit($id){
    	
        $std = User::find($id);
    	return view('home.edit', $std);
    }

    public function update($id, Request $req){
    	   
        $user = User::find($id);

        $user->name        = $req->name;
        $user->companyName = $req->companyName;
        $user->contactNo   = $req->contactNo;
        $user->password    = $req->password;
        $user->userType    = $req->userType;
        $user->save();

    	return redirect()->route('home.stdlist');
    }

    public function delete($id){

         $std = User::find($id);
        return view('home.delete', $std);
    	
    }

    public function destroy($id,Request $req){

        
    	$user = User::find($id);


        $user->name        = $req->name;
        $user->companyName = $req->companyName;
        $user->contactNo   = $req->contactNo;
        $user->password    = $req->password;
        $user->userType    = $req->userType;
        $user->delete();

        return redirect()->route('home.stdlist');
    }

    
}
