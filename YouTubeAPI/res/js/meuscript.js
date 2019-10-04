$(() => {

    let key = "AIzaSyA2UZgtunKwnUGu439BewZpHZeqQi7JC8c";

    $.ajax({
        method: "GET",
        url: "https://www.googleapis.com/youtube/v3/channels",
        data: {

            part: "contentDetails",
            forUsername: "CienciaTodoDia",
            maxResults: 5,
            key

        },
        success: r => {

            let upload = r.items["0"].contentDetails.relatedPlaylists.uploads;

            getVideo(upload);

        }
    });
    //.ajax

    getVideo = (code) => {

        $.ajax({
            method: "GET",
            url: "https://www.googleapis.com/youtube/v3/playlistItems",
            data: {

                part: "snippet",
                playlistId: code,
                maxResults: 5,
                key

            },
            success: r => {


                Object.keys(r.items).forEach((item, index) => {

                    buildCarousselItem(r.items[item], index);

                });

            }
        });
        //.ajax

    }
    //.getVideo

    buildCarousselItem = (data, index) => {

        let snippet = data.snippet;

        console.log(snippet);

        let item = `

        <div class="carousel-item ${(index === 0) ? "active" : "" } w-100">

        <div class="card ">

            <div class="card-header bg-danger">
                <h5 class="text-light text-center">${snippet.channelTitle}</h5>
            </div>

            <div class="card-body d-flex align-itens-center justify-content-center shadow">

                <div class="card mb-3" style="max-width: 540px;">

                    <div class="row no-gutters">

                        <div class="col-md-4">
                            <img src=" ${snippet.thumbnails.high.url}" class="card-img" alt="default thumb">
                        </div>

                        <div class="col-md-8">

                            <div class="card-body">
                                <h5 class="card-title">${snippet.title}</h5>
                                <button class="btn btn-outline-danger btn-block mt-2">Assistir</button>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </div>

    </div>


        `

        setCarousselItem(item);
    }
    //.buildCarousselItem

    setCarousselItem = (item) => {

        $("#carContainer").append(item);

    }
    //.setCarrouselItem

});