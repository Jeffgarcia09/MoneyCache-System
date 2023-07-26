<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('leads', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('business_Name');
            $table->string('contact_Number')->length(13);
            $table->string('email_Address')->unique();
            $table->string('address');
            $table->enum('status', ['leads', 'qualified leads', 'closed leads', 'not interested'])->default('leads');
            $table->string('subscription');
            $table->string('agent_Name')->nullable();
            $table->date('started_Date');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('customers');

        Schema::dropIfExists('leads');
    }
};
