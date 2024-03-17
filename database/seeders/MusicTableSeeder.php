<?php

namespace Database\Seeders;

use App\Models\Music;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MusicTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $musics = [
            [
                'name' => 'Taylor Swift',
                'slug' => 'taylor-swift',
                'music_url' => 'https:///',
                'thumbnail' => 'images',
                'is_featured' => 1,
            ],
            [
                'name' => 'Via Vallen',
                'slug' => 'via-vallen',
                'music_url' => 'https:///',
                'thumbnail' => 'images',
                'is_featured' => 0,
            ],
        ];
        Music::insert($musics);
    }
}
