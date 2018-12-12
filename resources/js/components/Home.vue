<template>
   <v-container>
       <v-layout row wrap>
           <v-flex xs12 class="text-xs-center text-sm-center text-md-center text-lg-center">
					<img :src="imageUrl" height="150" v-if="imageUrl"/>
					<v-text-field label="Select Image"  v-model='csv_file' @click='csv_fileFun(csv_file)' prepend-icon='attach_file'></v-text-field>
					<input
						type="file"
						style="display: none"
						ref="image"
						accept="file/.csv"
						@change="onFilePicked"
					>
            </v-flex>
				<v-dialog v-model="dialog" max-width="290">
					<v-card>
						<v-card-title class="headline">Hello World!</v-card-title>
						<v-card-text>Upload your csv file
							<hr>
							<br>http://yubarajshrestha.com.np/</v-card-text>
						<v-card-actions>
							<v-spacer></v-spacer>
							<v-btn color="green darken-1" flat="flat" @click.native="dialog = false">Close</v-btn>
						</v-card-actions>
					</v-card>
				</v-dialog>
	
       </v-layout>
       <v-layout row wrap>
           <v-data-table
                :headers="headers"
                :items="desserts"
                class="elevation-1"
            >
                <template slot="items" slot-scope="props">
                    <td>{{ props.item.name }}</td>
                    <td class="text-xs-right">{{ props.item.calories }}</td>
                    <td class="text-xs-right">{{ props.item.fat }}</td>
                    <td class="text-xs-right">{{ props.item.carbs }}</td>
                    <td class="text-xs-right">{{ props.item.protein }}</td>
                    <td class="text-xs-right">{{ props.item.iron }}</td>
                </template>
            </v-data-table>
       </v-layout>
   </v-container>
</template>

<script>
    export default {
        data(){
            return{
                imgUrl:'',
                csv_file:'',
                headers: [
                    {
                        text: 'User ID',
                        align: 'left',
                        sortable: false,
                        value: 'user_id'
                    },
                    { text: 'Name', value: 'name' },
                    { text: 'Designation', value: 'designation' },
                    { text: 'Post', value: 'post' },
                    { text: 'Post Url', value: 'post_url' },
                    { text: 'Date', value: 'default_date' }
                ]
            }
        },
        computed: {
           ...mapGetters(['desserts', 'menus', 'csv_fileFun', 'isLoggedIn'])
        },
        methods:{
            
        }
    }
</script>

<style scoped>
    .title {
        position:absolute;
        bottom:50px;
        background-color: rgba(0,0,0,0.5);
        color:white;
        font-size: 2em;
        padding:20px;
    }
</style>