<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up(): void
    {
        Schema::create('agents', function (Blueprint $table) {
            $table->id();
            $table->string('email')->unique();
            $table->string('images')->nullable();
            $table->string('first_name');
            $table->string('middle_name')->nullable();
            $table->string('last_name');
            $table->string('suffix')->nullable();
            $table->integer('phone')->length(11);
            $table->string('city');
            $table->string('province');
            $table->unsignedTinyInteger('zipcode')->length(5);
            $table->date('date_hired');
            $table->date('start_date');
            $table->string('contract')->nullable();
            $table->string('clearance')->nullable();
            $table->string('password');
            $table->timestamps();
        });
    }
    public function down(): void
    {
        Schema::dropIfExists('agents');
    }
};
