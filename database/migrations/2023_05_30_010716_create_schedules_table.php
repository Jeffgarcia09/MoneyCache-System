<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSchedulesTable extends Migration
{
    public function up()
    {
        Schema::create('schedules', function (Blueprint $table) {
            $table->id();
            $table->string('client_name');
            $table->date('date');
            $table->string('time');
            $table->string('status');
            $table->unsignedBigInteger('agent_id')->nullable();
            $table->string('reason')->nullable();
            $table->timestamps();

            // Add foreign key constraint if applicable
            $table->foreign('agent_id')->references('id')->on('agents');
        });
    }

    public function down()
    {
        Schema::dropIfExists('schedules');
    }
}
