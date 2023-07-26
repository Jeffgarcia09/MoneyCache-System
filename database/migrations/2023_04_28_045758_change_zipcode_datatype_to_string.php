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
        Schema::table('agents', function (Blueprint $table) {
            $table->string('zipcode')->length(5)->change();
            $table->string('phone')->length(13)->change();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('agents', function (Blueprint $table) {
            // $table->unsignedTinyInteger('zipcode')->length(5)->change();
            $table->string('zipcode')->length(5)->change();
            $table->string('phone')->length(13)->change();
        });
    }
};
