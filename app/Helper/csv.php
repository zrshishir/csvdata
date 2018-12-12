<?php 
    function csvFileRead($filePath) {
        
        $csv = \League\Csv\Reader::createFromPath($filePath, 'r');
        $csv->setHeaderOffset(0);
        return $csv->getRecords();
    
    }

    function csvValidationMsgRules() {
        return [ 
            [
                'in' => 'The Upload file must be a file of type: csv.',
            ],
            [
                'ext' => 'in:csv'
            ]
        ];
    }