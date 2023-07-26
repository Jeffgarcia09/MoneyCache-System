<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AgentController;
use App\Http\Controllers\AdministratorController;
use App\Http\Controllers\LeadController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ProspectController;
use App\Http\Controllers\ActivityLogController;
use App\Http\Controllers\MeetingController;
use App\Http\Controllers\ScheduleController;
use App\Http\Controllers\AdministratorLeadController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\TimesheetController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['middleware' => ['auth:sanctum', 'auth.admin']], function () {
    Route::apiResource('/administrators', AdministratorController::class);
    // Route::apiResource('/agents', AgentController::class);
});



Route::get('administrators/api/meetings/create', [MeetingController::class, 'create'])->name('meetings.create');
Route::post('administrator/store', [AdministratorController::class, 'store'])->name('administrator.store');
//Route::post('administrator.update', [AdministratorController::class, 'store'])->name('administrator.update');
//Route::delete('/administrators/{id}', [AdministratorController::class, 'destroy']);

//TIMESHEET CONTROLLER(BRIAN)
Route::apiResource('timesheets', 'TimesheetController');
// Route::apiResource('timesheets', TimesheetController::class);
Route::get('/timesheets', [TimesheetController::class, 'index']);
Route::post('/timesheets', [TimesheetController::class, 'store'])->name('timesheets.store');
Route::get('/timesheets/{id}', [TimesheetController::class, 'show'])->name('timesheets.show');
Route::put('/timesheets/{id}', [TimesheetController::class, 'update'])->name('timesheets.update');
Route::delete('/timesheets/{id}', [TimesheetController::class, 'destroy'])->name('timesheets.delete');



//admin here

//Route::post('administrator/store', [AdministratorController::class, 'store'])->name('administrator.store');
//Route::post('administrator.update', [AdministratorController::class, 'store'])->name('administrator.update');
//Route::delete('/administrators/{id}', [AdministratorController::class, 'destroy']);
//end admin here



//Route::post('administrator.delete', [AdministratorController::class, 'delete'])->name('administrator.delete');
//Route::post('dashboard', [DashboardController::class,'store'])->name('dashboard.store');
//Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
//    return $request->user();
//});


//api logout route
Route::post('/logout', [AuthenticatedSessionController::class, 'destroy']);
/// end logout here 


// agent api route

// agent api routeasdasd


// agent api routeasdasdSS
Route::post('agent/update', [AgentController::class, 'store'])->name('agent.update');
// Route::post('agent/delete', [AgentController::class, 'destroy'])->name('agent.delete');
Route::delete('/agent/{id}', [AgentController::class, 'destroy']);
Route::get('/agent/options', [AgentController::class, 'getAgentOptions'])->name('agent.options');


//leads api here
Route::get('/leads', [LeadController::class, 'index']);
Route::post('/leads', [LeadController::class, 'store'])->name('lead.create');
// Route::put('/leads', [LeadController::class, 'update'])->name('leads.update');
Route::get('/leads/{id}', [LeadController::class, 'show'])->name('leads.show');

Route::get('/leads', [LeadController::class, 'index'])->name('leads.index');

//end of leads api

//prospects api here
// Route::get('/schedule', [ScheduleController::class, 'index']);
Route::post('/schedule', [ScheduleController::class, 'store'])->name('schedule.store');

Route::post('/schedules', [ScheduleController::class, 'createSchedule'])->name('schedule.create');
Route::post('/schedules', [ScheduleController::class, 'createSchedule']);
Route::put('/schedules/{id}', [ScheduleController::class, 'updateSchedule']);
// Route::post('/schedules', [ScheduleController::class, 'addSchedule'])->name('schedules.add');


