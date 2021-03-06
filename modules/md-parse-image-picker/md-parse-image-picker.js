'use strict';

/**
 * @ngdoc directive
 * @name doctaApp.directive:parseImageUpload
 * @description
 * # parseImageUpload
 */
angular.module('tm.md-parse-image-picker',[
    'tm.parse',
    'ngMaterial'
  ])
  .directive('parseImagePicker', function ($window) {

    return {
      template: '<div layout="row" layout-align="space-between end" class="md-padding">'+
                  '<div flex="30" style="background-size:16px 16px;background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAIAAAAlC+aJAAAACXBIWXMAABYlAAAWJQFJUiTwAAAKH2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjarZZXUNSHGsXP/7+90XapUpbeBOlV6lIFBZFuY9mlt2VdEHsjGMFYUBHBikREFIxGQGJBLFgR7D0gQUWNQQ02VO4DuUnu3MnDnbln5ps5cx7Ome/tB3DSxTJZNqkC5OQq5FHB/sL4hEQh4xFYYEIZetAUS+bI/CIjw/GPencLBABctxHLZNn436QqTZkjAYhIAHnSOZIcgGgHECCRyRUASQVgPFchUwCkBQCBPD4hESAnAhCkjflIAILkMS8FIJBHR4kAsghgcsVieRrALgYgLJSkKQB2LQC7XGlGLsC+AcBbki6WAhwBgPE5OXlSgOMLwCL5bz1p/9GZ/GenWJz2px/7BQCgLsrLzpMLw0UBQpE4OyNZLlakSPF/Vk52wb/3CADclNyYaQAsAOhChDxkIw9yCBEOEQIghAhiZCMDyZBDDAVSIFWkFCkAQJQnmyfPSEtXCP1ksuwUYWiuxHa80MHO3gmIT0gUjs281QABgNC4+FeW3w64lwJE2l+Z2Bg4+gTgv/srM34DcNcBx7slBfLCsYwKADSwoQwBtKEPY1jABg5wgSd8EYhJiEA0EjALEqQjB3LMxUIsQwnKsA6bUIUd2I29OIBDaMExnMI5XEI3buI+ejGAFxjCO4wQBMEgeASf0CYMCFPCmnAg3AhvIpAIJ6KIBCKJSCNyiQJiIbGCKCPKiSpiF1FP/EAcJU4RF4ge4i7RRwwSb4hPJIXkkgJSjzQjJ5BupB8ZRkaTM8k0Mp+cTxaTa8hKsobcTzaTp8hL5E2yl3xBDlNA4VA0KIYUG4obRUSJoCRSUilyymJKKaWCUkNppLRROinXKb2Ul5SPVDqVTxVSbaie1BBqDFVCzacupq6mVlH3UpupZ6jXqX3UIepXGo+mS7OmedBCafG0NNpcWgmtgraHdoR2lnaTNkB7R6fTNejmdFd6CD2BnklfQF9N30ZvorfTe+j99GEGg6HNsGZ4MSIYYoaCUcLYwtjPOMm4xhhgfGBymAZMB2YQM5GZy1zOrGDuY55gXmM+ZY6wVFimLA9WBEvKmsday6pltbGusgZYI2xVtjnbix3NzmQvY1eyG9ln2Q/YbzkcjhHHnTOVk8FZyqnkHOSc5/RxPnLVuFZcEXcGt4C7hlvHbefe5b7l8XhmPF9eIk/BW8Or553mPeJ9UOIr2SqFKkmVlihVKzUrXVN6pcxSNlX2U56lPF+5Qvmw8lXllyosFTMVkYpYZbFKtcpRldsqw6p8VXvVCNUc1dWq+1QvqD5TY6iZqQWqSdWK1XarnVbr51P4xnwRX8Jfwa/ln+UPCOgCc0GoIFNQJjgg6BIMqaupO6nHqhepV6sfV+/VoGiYaYRqZGus1TikcUvjk6aepp9miuYqzUbNa5rvtcZp+WqlaJVqNWnd1PqkLdQO1M7SXq/dov1Qh6pjpTNVZ67Odp2zOi/HCcZ5jpOMKx13aNw9XVLXSjdKd4Hubt3LusN6+nrBejK9LXqn9V7qa+j76mfqb9Q/oT9owDfwNsgw2Ghw0uC5UF3oJ8wWVgrPCIcMdQ1DDAsMdxl2GY4YmRvFGC03ajJ6aMw2djNONd5o3GE8ZGJgMtlkoUmDyT1TlqmbabrpZtNO0/dm5mZxZivNWsyemWuZh5rPN28wf2DBs/CxyLeosbhhSbd0s8yy3GbZbUVaOVulW1VbXbUmrV2sM6y3WfeMp413H587vmb8bRuujZ9NoU2DTZ+thm247XLbFttXE0wmJE5YP6Fzwlc7Z7tsu1q7+/Zq9pPsl9u32b9xsHKQOFQ73HDkOQY5LnFsdXztZO2U4rTd6Y4z33my80rnDucvLq4ucpdGl0FXE9ck162ut90EbpFuq93Ou9Pc/d2XuB9z/+jh4qHwOOTxm6eNZ5bnPs9nE80npkysndjvZeQl9trl1est9E7y3und62PoI/ap8Xnsa+wr9d3j+9TP0i/Tb7/fK387f7n/Ef/3Ig/RIlF7ACUgOKA0oCtQLTAmsCrwUZBRUFpQQ9BQsHPwguD2EFpIWMj6kNuheqGS0PrQoUmukxZNOhPGDZsWVhX2ONwqXB7eNpmcPGnyhskPpphOyZ3SEoGI0IgNEQ8jzSPzI3+aSp8aObV66pMo+6iFUZ3T+NNmT9s37V20f/Ta6PsxFjEFMR2xyrEzYutj38cFxJXH9cZPiF8UfylBJyEjoTWRkRibuCdxeHrg9E3TB2Y4zyiZcWum+cyimRdm6czKnnV8tvJs8ezDSbSkuKR9SZ/FEeIa8XByaPLW5CGJSLJZ8kLqK90oHUzxSilPeZrqlVqe+izNK21D2mC6T3pF+ssMUUZVxuvMkMwdme+zIrLqskaz47Kbcpg5STlHc9Vys3LP5OnnFeX1yKxlJbLefI/8TflD8jD5njnEnJlzWhUChUxxucCi4JuCvkLvwurCD3Nj5x4uUi3KLbo8z2reqnlP5wfN/34BdYFkQcdCw4XLFvYt8lu0azGxOHlxxxLjJcVLBpYGL927jL0sa9mV5XbLy5f/viJuRVuxXvHS4v5vgr9pKFEqkZfcXum5cse31G8zvu1a5bhqy6qvpdLSi2V2ZRVln1dLVl/8zv67yu9G16Su6Vrrsnb7Ovq63HW31vus31uuWj6/vH/D5A3NG4UbSzf+vmn2pgsVThU7NrM3F2zurQyvbN1ismXdls9V6VU3q/2rm7bqbl219f026bZr2323N+7Q21G249POjJ13dgXvaq4xq6nYTd9duPtJbWxt5/du39fv0dlTtudLXW5d796ovWfqXevr9+nuW9tANhQ0DO6fsb/7QMCB1kabxl1NGk1lB3Gw4ODzH5J+uHUo7FDHYbfDjT+a/rj1CP9IaTPRPK95qCW9pbc1obXn6KSjHW2ebUd+sv2p7pjhserj6sfXnmCfKD4xenL+yeF2WfvLU2mn+jtmd9w/HX/6xpmpZ7rOhp09fy7o3OlOv86T573OH7vgceHoRbeLLZdcLjVfdr585IrzlSNdLl3NV12vtna7d7f1TOw5cc3n2qnrAdfP3Qi9cenmlJs9t2Ju3bk943bvHemdZ3ez776+V3hv5P7SB7QHpQ9VHlY80n1U87Plz029Lr3H+wL6Lj+e9vh+v6T/xS9zfvk8UPyE96TiqcHT+mcOz44NBg12P5/+fOCF7MXIy5JfVX/d+sri1Y+/+f52eSh+aOC1/PXom9Vvtd/W/e70e8dw5PCjdznvRt6XftD+sPej28fOT3Gfno7M/cz4XPnF8kvb17CvD0ZzRkdlYrkYAEABQKamAm/qAF4CwO8G2EpjzPYH4xB/o51/8GNcBwBwAep8gZilQHg7sL0dMF0KcNuBSADRviAdHf+8PzQn1dFhrIsrB2gfRkff6gGMNuCLfHR0ZNvo6JdagHIXaM8fY0UAoKsAO40A4Irxyv/itH8Br0C/+v4ahhQAAAAgY0hSTQAAbXUAAHOgAAD83QAAg2QAAHDoAADsaAAAMD4AABCQ5OyZ6gAAAGZJREFUeNrs2NEJACAIRdGKNnL/EZzJpjAKzh1AOLw/Z1WNzjKz9f4anwcAAAAAAAAAAAAAAAAAAAAAAAAAAABwv939v48ICwAAAAAAAAAAAAAAAAAAAAAAAAAAAAC81QEAAP//AwDM0QjmcPH5EAAAAABJRU5ErkJggg==);">'+
                    '<img style="margin:0;padding:0;display:block;width:100%" ng-show="src.length" ng-src="{{src}}">'+
                  '</div>'+
                  '<div ng-show="src.length" flex="5"></div>' +
                  '<div layout-fill layout="column">'+
                    '<md-progress-circular ng-show="loading" md-mode="indeterminate"></md-progress-circular>' +
                    '<input type="file" onchange="angular.element(this).scope().imageInputOnChange(this)" name="image">'+
                  '</div>' +
                '</div>',
      restrict: 'E',
      scope:{
        image: '=',
        cropper: '=',
        aspectRatio: '=',
        placeHolder: '@',
        transparentBg: '@',
        cropHeight: '=',
        cropWidth: '='
      },
      link: function postLink(scope, element) { // @params(scope, element, attrs)
        scope.inputEl = element[0].getElementsByTagName('input')[0];
        scope.imgEl = element[0].getElementsByTagName('img')[0];
      },
      controller: function(Parse, $scope, $mdDialog, $q){
        $scope.src = $scope.placeHolder;
        $scope.loading = false;

        $scope.$watch('image',function(newVal){
          if(newVal && newVal.__type && newVal.__type === 'File')
          {
            if($scope.src === newVal.url)
            {
              return;
            }

            $scope.src = newVal.url;
          }
        });

        function createParseFile(fileName, data){
          var deferred = $q.defer(),
            cleanName = fileName.replace(/[^a-zA-Z0-9]+/ig,'-');

          $scope.src = $scope.placeHolder;
          
          $scope.image = new Parse.File(cleanName, data);
          $scope.image.save({
            success:function(response){
              deferred.resolve(response);
            },
            error:function(response, err){
              deferred.reject(err);
            }
          });

          return deferred.promise;
        }

        $scope.imageInputOnChange = function (input) {
          var file = input.files[0];
          var name = file.name;

          $scope.$evalAsync(function(){
            $scope.loading = true;
          });

          if(!$scope.cropper)
          {
            createParseFile(name, file)
            .then(function(){ // @params(response)

              $scope.loading = false;
              
              var reader = new FileReader();
              reader.onload = function () { // @params(event)
                if(reader.readyState === reader.DONE)
                {
                  $scope.$evalAsync(function(){
                    $scope.src = reader.result;
                  });
                }
              };
              reader.readAsDataURL(file);

            },function(){
              $mdDialog
              .show(
                $mdDialog
                .alert()
                .title('Server Error')
                .content('There has been an error with the remote server, try uploading the file again')
                .ok('Close')
              );
            });

            return;
          }

          $mdDialog
          .show({
            template:
              '<md-dialog>' +
              '  <md-content>'+
              '    <img>'+
              '  </md-content>' +
              '  <div class="md-actions">' +
              '    <md-button ng-click="saveCrop()">' +
              '      Save' +
              '    </md-button>' +
              '    <md-button ng-click="closeDialog()">' +
              '      Close' +
              '    </md-button>' +
              '  </div>' +
              '</md-dialog>',
            locals: {
              file: file,
              aspectRatio: $scope.aspectRatio,
              cropHeight: $scope.cropHeight,
              cropWidth: $scope.cropWidth
            },
            controller: function($scope, file, aspectRatio, cropHeight, cropWidth){
              $scope.file = file;
              $scope.aspectRatio = aspectRatio;
              $scope.cropHeight = cropHeight;
              $scope.cropWidth = cropWidth;

              $scope.saveCrop = function(){
                var dataURI = $scope.canvas.cropper('getDataURL',{
                  width: $scope.cropWidth,
                  height: $scope.cropHeight
                });
                $mdDialog.hide(dataURI);

              };

              $scope.closeDialog = function(){
                $mdDialog.cancel();
              };
            },
            onComplete: function(scope, element){ // @params(scope, element, options)
              scope.imgEl = element[0].getElementsByTagName('img')[0];

              var cropperOptions = {};
              if(scope.aspectRatio)
              {
                cropperOptions.aspectRatio = scope.aspectRatio;
              }

              var reader = new FileReader();
              reader.onload = function () { // @params(event)
                if(reader.readyState === reader.DONE)
                {
                  scope.canvas  = $window.jQuery(scope.imgEl)
                                  .cropper(cropperOptions)
                                  .cropper('replace',reader.result);
                }
              };
              reader.readAsDataURL(scope.file);

            }
          }).then(function(dataURI){
            createParseFile(name, {base64: dataURI})
            .then(function(){ // @params(response)
              $scope.src = dataURI;
              $scope.loading = false;
            },function(){
              $mdDialog
              .show(
                $mdDialog
                .alert()
                .title('Server Error')
                .content('There has been an error with the remote server, try uploading the file again')
                .ok('Close')
              );
            });
          },function(){
            $scope.loading = false;
          });
        };

      }
    };
  });
