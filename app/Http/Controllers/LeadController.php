<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Agent;
use App\Models\Lead;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

use function compact;
use function response;
use function view;

class LeadController extends Controller
{
    public function index()
    {
        // $leads = Lead::all();
        // return view('leads.index', compact('leads'));
        $leads = Lead::all();

        return response()->json($leads);
    }

    public function create()
    {
        $agents = Agent::all();

        return response()->json([$agents]);
    }

    //for new branch to commit

    public function store(Request $request)
    {
        // $request->validate([
        //     'name'           => 'required|string|max:255|unique:leads',
        //     'business_Name'  => 'required|string|max:255',
        //     'contact_Number' => 'required|numeric|unique:leads',
        //     'email_Address'  => 'required|string|email|max:255|unique:leads',
        //     'address'        => 'required|string|max:255',
        //     'status'         => 'required|string|max:255',
        //     'subscription'   => 'required|string|max:255',
        //     'started_Date'   => 'required|date',
        // ]);

        
            // dd(auth()->user());

            // $lead = Lead::create($request->all());
            // $user = auth()->user();

            //     return response()->json([
            //         'data' => [
            //             'email'          => $lead->email,
            //             'business_Name'  => $lead->business_Name,
            //             'contact_Number' => $lead->contact_Number,
            //             'email_Address'  => $lead->email_Address,
            //             'address'        => $lead->address,
            //             'status'         => $lead->status,
            //             'subscription'   => $lead->subscription,
            //             'agent_id'       => $lead->agent_id,
            //             'started_Date'   => $lead->started_Date,
            //         ],
            //     ], 201);

                $leadData = $request->all();

                
                if (auth()->check() && auth()->user()->profile_type === 'agent') {
                    $leadData['agent_id'] = auth()->id();
                }

                $lead = Lead::create($leadData);

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

    public function show($id)
    {
        if (! $id) {
            return response()->json('Record ID is required!', 500);
        }

        $lead = Lead::find($id);

        if (! $lead) {
            return response()->json('Lead not found!', 404);
        }

        return response()->json([
            'data' => $lead,
        ]);
    }

    public function edit(Lead $lead)
    {
        return view('leads.edit', compact('lead'));
    }

    public function update(Request $request, $id)
    {
        $lead = Lead::find($id);

        if (! $lead) {
            return response()->json(['message' => 'Lead not found'], 404);
        }

        $validatedData = $request->validate([
            'name'           => 'required|string|max:255',
            'business_Name'  => 'required|string|max:255',
            'contact_Number' => 'required|numeric',
            'email_Address'  => 'required|string|email|max:255|unique:leads,email_Address,' . $lead->id,
            'address'        => 'required|string|max:255',
            'status'         => 'required',
            'subscription'   => 'required|string|max:255',
            'agent_id'       => 'nullable',
            'started_Date'   => 'required|date',
        ]);

        $lead->name           = $validatedData['name'];
        $lead->business_Name  = $validatedData['business_Name'];
        $lead->contact_Number = $validatedData['contact_Number'];
        $lead->email_Address  = $validatedData['email_Address'];
        $lead->address        = $validatedData['address'];
        $lead->status         = $validatedData['status'];
        $lead->subscription   = $validatedData['subscription'];
        // $lead->agent_id = $validatedData['agent_id'];
        $lead->started_Date = $validatedData['started_Date'];
        $lead->save();

        return response()->json($lead);
    }

    public function destroy($id)
    {
        $lead = Lead::find($id);

        if (! $lead) {
            return response()->json([
                'error' => 'Lead not found.',
            ], Response::HTTP_NOT_FOUND);
        }

        $lead->delete();

        return response()->json([
            'message' => 'Lead deleted successfully.',
        ], Response::HTTP_OK);
    }
}
