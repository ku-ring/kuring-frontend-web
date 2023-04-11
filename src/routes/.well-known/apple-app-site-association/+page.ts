import { json } from '@sveltejs/kit';

export function load() {
	return json(
        {
            "applinks": {
                "details": [
                     {
                       "appIDs": ["77CD4KLN3Y.com.kuring.service"],
                       "components": [
                         {
                            "/": "/share/*",
                            "comment": "Matches any URL with a path that starts with /share/."
                         }
                       ]
                     }
                 ]
             }
          }
    );
}
