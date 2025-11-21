<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateResourcesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('resources', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug')->unique();
            $table->text('description')->nullable();
            $table->string('file_url'); // URL del archivo
            $table->string('file_type')->nullable(); // PDF, DOCX, etc.
            $table->integer('file_size')->nullable(); // En bytes
            $table->string('category')->nullable(); // Estudios, Materiales, etc.
            $table->foreignId('ministry_id')->nullable()->constrained()->onDelete('set null');
            $table->foreignId('uploaded_by')->nullable()->constrained('users')->onDelete('set null');
            $table->integer('downloads')->default(0);
            $table->boolean('is_published')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('resources');
    }
}
