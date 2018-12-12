<?php

namespace App\App\Models\Csvdata;

use Illuminate\Database\Eloquent\Model;

class Csvdata extends Model
{
    protected $table = 'csvdatas';
    protected $fillable = ['user_id', 'name', 'designation', 'post', 'post_url', 'email', 'default_date'];
}
