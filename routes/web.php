<?php

use App\Http\Controllers\AdministratorController;
use App\Http\Controllers\AgentController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\TimesheetController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MeetingController;
use App\Http\Controllers\LeadController;
use App\Http\Controllers\SubscriberController;
use App\Http\Controllers\ProspectController;
use App\Mail\RegisterAdminMail;
use Illuminate\Support\Facades\Mail;
use App\Http\Controllers\ScheduleController;
use App\Mail\RegisterAgentMail;


use App\Http\Controllers\TimeTracker;


/////testingg
// Route::group(['middleware' => ['auth']], function () {

//     Route::put('leads/{lead}', [LeadController::class, 'update'])->name('leads.update');

//     Route::get('/leads/{id}', [LeadController::class, 'show'])->name('leads.showLead');
//     Route::delete('/leads/destroy', [LeadController::class, 'destroy'])->name('leads.destroyLead');
// });

//ROUTE OF THE TIMESHEET (BRIAN)
// Route::resource('timesheet', TimesheetController::class);


// Route::post('/leads', [LeadController::class, 'store'])->name('lead.create');
// Route::get('/leads', [LeadController::class, 'index'])->name('leads.index');

//Testing via Postman (BRIAN JOSHUA)
Route::post('/timesheets', [TimesheetController::class, 'store'])->name('timesheets.store');
Route::get('/timesheets/{id}', [TimesheetController::class, 'show'])->name('timesheets.show');
Route::put('/timesheets/{id}', [TimesheetController::class, 'update'])->name('timesheets.update');
Route::delete('/timesheets/{id}', [TimesheetController::class, 'destroy'])->name('timesheets.delete');
Route::get('/timesheets', [TimesheetController::class, 'index']);


Route::group(['auth.session' => ['auth']], function () {
    Route::get('/leads/create', [LeadController::class, 'create'])->name('leads.create');
    Route::post('/leads/update', [LeadController::class, 'edit'])->name('leads.edit');
    Route::get('/leads/{id}', [LeadController::class, 'show'])->name('leads.show');
    Route::delete('/leads/destroy', [LeadController::class, 'destroy'])->name('leads.show');
    Route::post('/register/administrator', [AdministratorController::class, 'store'])->name('register.administrator');
    Route::get('/leads', [LeadController::class, 'index']);
    Route::get('/leads/show', 'LeadController@getTotalLeads');
});

Route::delete('/schedule/{id}', [ScheduleController::class, 'destroy'])->name('schedule.destroy');
Route::get('/schedule', [ScheduleController::class, 'index']);
Route::put('/schedule/{id}', [ScheduleController::class, 'update'])->name('schedule.update');
Route::delete('/leads/{id}', [LeadController::class, 'destroy'])->name('leads.destroy');
Route::put('/leads/{id}', [LeadController::class, 'update'])->name('lead.update');
Route::post('/schedule', [ScheduleController::class, 'store'])->name('schedule.store');
Route::post('/leads', [LeadController::class, 'store'])->name('lead.create');
Route::post('/timesheet', [TimesheetController::class, 'store'])->name('timesheet.store');
Route::post('administrators/meetings/store', [MeetingController::class, 'store'])->name('meetings.store');
/// end testing 

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     Mail::to('logicbaseojt.baranggan@gmail.com')
//     ->send(new RegisterAgentMail('https://localhost:3000/login', 'logicbaseojt@gmail.com', 'Pa$$w0rd'));

//     dd('email sent');
// });

// Route::post('prospect', [ProspectController::class, 'prospect'])->name('prospect');
Route::post('agent', [AgentController::class, 'agent'])->name('agent');




//Agent web route
Route::post('/register/agent', [AgentController::class, 'store'])->name('register.agent');
Route::post('agent/store', [AgentController::class, 'store'])->name('agent.store');
Route::delete('/agent/{id}', [AgentController::class, 'destroy']);
Route::get('/agent',[AgentController::class, 'index']);




// Route::middleware(['auth:sanctum'])->group(function () {
// Route::resource('prospect', ProspectController::class);
// Route::delete('/prospects/{id}', [ProspectController::class, 'destroy']);
// Route::patch('prospect.update', [ProspectController::class, 'store'])->name('prospect.update');
// Route::put('prospect.update', [ProspectController::class, 'update'])->name('prospect.update');
// Route::patch('prospect.update', [ProspectController::class, 'store'])->name('prospect.update');
// Route::post('/schedule', [ScheduleController::class, 'store'])->name('schedule.store');

// Route::resource('schedule', ScheduleController::class)->only(['index', 'store']);

// Route::post('/schedules', [ScheduleController::class, 'createSchedule'])->name('schedule.create');

Route::get('/schedules/{id}/edit', [ScheduleController::class, 'edit']);
Route::put('/schedules/{id}', [ScheduleController::class, 'update']);

// Route::post('/schedules', [ScheduleController::class, 'createSchedule']);
Route::put('/schedule/{id}', [ScheduleController::class, 'update']);




// Route::post('customer.destroy', [CustomerController::class, 'destroy'])->name('customer.destroy');
Route::delete('/administrators/{id}', [AdministratorController::class, 'destroy']);
// Route::delete('/administrators/{id}', [AdministratorController::class, 'destroy']);
Route::get('/admindashboard', [AdministratorController::class, 'showData']);






// });

require __DIR__ . '/auth.php';




// Route::post('/subscribe', [SubscriberController::class, 'subscribe']);



require __DIR__ . '/auth.php';
