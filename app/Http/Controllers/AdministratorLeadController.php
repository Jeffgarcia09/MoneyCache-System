<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Lead;
use Illuminate\Http\Request;

use function compact;
use function redirect;
use function response;
use function view;

class AdministratorLeadController extends Controller
{
    public function index()
    {
        // $leads = Lead::all();
        // return view('leads.index', compact('leads'));
    }

    public function create()
    {
        return view('leads.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name'           => 'required|string|max:255|unique:leads',
            'business_Name'  => 'required|string|max:255',
            'contact_Number' => 'required|numeric|unique:leads',
            'email_Address'  => 'required|string|email|max:255|unique:leads',
            'address'        => 'required|string|max:255',
            'status'         => 'required|string|max:255',
            'subscription'   => 'required|string|max:255',
            'agent_id'       => 'required|string|max:255',
            'started_Date'   => 'required|date',
        ]);

        $lead = Lead::create($request->all());

        return response()->json([
            'data' => [
                'email'          => $lead->email,
                'business_Name'  => $lead->business_Name,
                'contact_Number' => $lead->contact_Number,
                'email_Address'  => $lead->email_Address,
                'address'        => $lead->address,
                'status'         => $lead->status,
                'subscription'   => $lead->subscription,
                'agent_id'       => $lead->agent_id,
                'started_Date'   => $lead->started_Date,
            ],
        ], 201);
    }

    public function show(Lead $lead)
    {
        return view('leads.show', compact('lead'));
    }

    public function edit(Lead $lead)
    {
        return view('leads.edit', compact('lead'));
    }

    public function update(Request $request, Lead $lead)
    {
        $request->validate([
            'name'           => 'required|string|max:255',
            'business_Name'  => 'required|string|max:255',
            'contact_Number' => 'required|numeric|digits:13',
            'email_Address'  => 'required|string|email|max:255|unique:leads,email_Address,' . $lead->id,
            'address'        => 'required|string|max:255',
            'subscription'   => 'required|string|max:255',
            'agent_Name'     => 'required|string|max:255',
            'started_Date'   => 'required|date',
            'status'         => 'required|in:client,lead',
        ]);

        $lead->update($request->all());

        return redirect()->route('leads.index')
        ->with('success', 'Lead updated successfully.');
    }

    public function destroy(Lead $lead)
    {
        $lead->delete();

        return redirect()->route('leads.index')
        ->with('success', 'Lead deleted successfully.');
    }
}
