import { useEffect, useRef } from "react";

const sample_data = [
  {
    title: `  Anonymous NBA player poll 2024: LeBron or Jordan as the GOAT?
                Most overrated? Finals favorite?`,
    description: ` when The Athletic launched its first NBA player poll in 2019, with
              127 players answering questions about league matters so honestly
              because of the anonymity they were granted, the bar was set very
              high. We hit triple digits again last year (108 players), when the
              popular poll returned in full force after a COVID-19-induced
              hiatus because of limited locker room access for reporters during
              that time.`,
    img: "https://cdn.theathletic.com/cdn-cgi/image/width=1920%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/04/21171122/0422_NBAAnonPoll.png",
    author:
      "https://www.ap.org/wp-content/themes/apnews/assets/images/ap-news-logo.svg",
  },
  {
    title: `  Boeing Loses $355 Million in Latest Quarter`,
    description: `The manufacturer has had to slow production of its popular 737 Max planes after a hole blew open on a jet during an Alaska Airlines flight in January.`,
    img: "https://static01.nyt.com/images/2024/04/24/multimedia/24boeing-earnings-hzqg/24boeing-earnings-hzqg-mobileMasterAt3x.jpg?quality=75&auto=webp&disable=upscale&width=1800",
    author:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABVlBMVEUKTrP///8KTrL//f/8//8NS7j5//8ATrDx////+/3///wAQqwnWK4APamfuNXN3OcASK0KTbVhgL8FUa8AQ7p8m8Pj9PgAOaz///kAQKqpvt//+f////QAN6Pt9PgNTLYNS7sRTJ0AQJ0MT6iQrdBEcLnC2/AAR6oAO5wARrMAQrMAM6Y/ap0AN6AARKv6//rT5vUAPpWNp9cAMJkAN7FzlcQOScEAUqgAQb4ASKQAPpyrw9f//+xlibgAQZGDosctX6+BnNTa7e/h6fRbhMtGZ7NojMeuydVYd68uX6SNqsMHU58AM5PK5Ox8mNa7zuJMfK+83+yxyuQjXaWdvM7R7/U3XrqFoMCpu+IAMYA0W8MxcLILS5Ds/edjfscAPMFBasEAI554pdVrjrfj9Oy+xdYAHomOpdzY3/NgjMNqlriHrNqaoNODobddf6xmj8SmytouXpnH0Y5XAAAXwklEQVR4nO1c+3/axpbXjB4jCYM1HluIIBiBsHk4COzaUPxuqB1s6tI4SX133W17b9rbtNltbv7/X/aMwEEmJnZS7OTu6vvJA6RBmq/OnNfMGUlSjBgxYsSIESNGjBgxYsSIESNGjBgxYsSIESNGjBgxYsSIESNGjBgxYsSIESNGjBgxYsSIESNGjBgx/t8gdwXJZKJKMZYk/EEXEa2DXC5zN138SyBzOlI0NIKS786nvi5mgCPBEr3N79Wa5X/J2oQnUgjNJ++8wx8MYGi4ronMt0AN/exwg1Ku8lv8ni8vLS0ddTClnzNDo7lyiee2gmTD1B8XLPVWDBdPFISaFU/6rBmiXn1tqzhE4XjzpeaY2vNeQMktfp84QS5q1tW2+lkzXKgylYbgnAf1XheZjt4rMzxhb0aKiSNHOyegvc006bcynzVDSxrKi4ruE16Hzsr695gIDE8Qn1FO4bynSoyNf189QSbI0GOfuQwvGYbAnvdNyTTk0zpQGsmLAlPOGBBmmHutcWP161frrzYDyf83Yoh9iUv1MzerLCU4vxyYEgxh3++QMmO+7+NxYysRlBMS8z9rbzEhQwbAHRtl81uYj8wNoZSUq9VaLbmxseh548Y+oTCsGVbJvxFDT7UwrX7bcNBmB7QyPEaTubnd/QeDwWB+e3+5HryNeTyeqec6vtfyLxlayWRmSqwgTt0xn3dxDUMBzGq24cxvtDmjBONi78yGkCeMCGSE7JOiRbywHQngxNIiG8mw5qtf291HBxabuA808L3vTl8+qd4mUpolpjEktWfI0eaYiqlE+jYyHBOiOx2AkONodm+RYCnKEA8ZMlqBAw/SZCKuZVxiyXmEUsV7ozbCNIa42lNM5YUFDlIib8Dn2Wf7C4dgat58V3qpuKbes8J2EwwzEu3su1ndohMMiaTSpyirHXQ+LKT/65jCUKI8AGlt1ySwpuTATl10gnJZOEfuJSpH+axj+2K4vcMQvGVZz6KlxOT1mBo8Q/IgPUn9zjGd4QaMqfk0A1eIiV+pepSFUQ/hKu0c6q72TJB4h6EnscV/oezz+gQT7qudvNlYIJMKeueYNkqpmjwz0S8VPDQMoeMPGYYdT5aUrF6hEoQAgS1HGApvwb+Hk38u+kT1316Pqv0vz1H2dMtjn4kMgWHiFTJ0P5okhgzDT2pfy6JlC5pdw1CqD5AyyBEYmePfqu1KE6HN4N5FON3S8OomMDwg16VQWE0+MtCLMozlaxji8teNLHpK1ehFubWrmHbaa98mJZsppnoLWt1FprYcZYgFwg9s4xQEUqbSdTLEpPo8i54FKuOR66VBrUsBH7rR+8RUj0+rfyqGckHAloY6mEjmAoLr9UwAxrUdMoQMkl3LMHGONLuj+ur4ep3vNUcJ+qzl3Sc7gWm2lEjWAjKUZYJbHGMaHKy/7IYTOYPNYkBIpesMI5nr9BC3Ld3Qzr9sD9mIFIwlt5Hzt+R9W5nw9jcxJAXsVefONOS64WSV49j7GSnZNKczZCQNfJo5X6XDS0EW5uumdnjfAduQyfsYItBD4qu117rpmPmVV5u7m6UVzUHNQv30PTJkau2N5io9K9RDSD1UnthX3JXgU4jwBhlqhzBKg019R7fXO6u1mufV0u2Sbjb/o/m+UaqSzIpjDNJsGLpSFVe6jcaP1m0mfmaO9zA8AoYHBKsPdVNu/hBQFk5q+N7i0ybann8PQ271Wz1k6v85zJTBBXZ+R43nG5PR+P1gGkOvv7iOjF+IhzOncqOZfjsnJbL93IqbbUxnKBrl8rL7twoWkx8qYcWXCJ0nvHvkNcY0hmp7MaUYdkalCzrS31y1EbSvZ933MZSkxL7m2EXISyCqpfxCcfJ7t5p/nT2mRt5+boDk01WceGC6Z1cyc5BmtYRc5b0MKdOzjc0qaCFjEOI6Tip5/yFpiKl6SOoQmD1Os3QXNRYmnz4/0Iz3y5DWwGF06wTDQOX9vKM/Vd+5x/1gGkNm+XDivOanlawyN/H0sR/YNzCUgmNdRhcd0Fo1KCF0tiWxT+IOpzKssiNXQ4fcryKkz1kTDNvpR+gGhurWiokGRUJUsmXvAFf6eekh5skVA3W/oYwjWTuYePpYupkhtnaRox2rFAevkTNfIfTes/shpmZPc3rWTBUlnIHY7XDy6XuXvKYyxIxXmi7YF5WB90e7VQjgPy89LD4wDY35hNdtwzmyJs5Wj5Wb9JBL1j4y8wUaXGhuswiyxJ+NHmKR/14o2cb2hk/UyjxyH1TGq94iQ6SJkpO9gWGLsD4Y3HMrfeaa6wEXwdv9UhthyLCjtkaLa/Ccfcjmirbh2mH2C647q/8Aph5TjsXsPbHUVvBf5g2jVFILUnrbNJoZH7m2PzkI7pvhjzXuC3acqwBJ/Yk8d1zlqBO26Os7yraYkeqIhJd6Hmdrg3z3hphG4m3qvdGyjeUSMlPlT2NGQ4Tr+Atl1vcF2r7PSHl1U1dMZX2jHaYGxdJOFqXWqDccZG1W3ntgrg92bmAI7k/NrJjGr11De0M/MUNlIbe6kRbI5XKZn9cfNUxFP694I9VbayJXnr+oBGXLwuXFygsbzf/97CYZEtDY2u9OdscwBxX+6RhSwdBsnnabI9iNhmtkUfdhmowmIXgn0URIVpqp3eWfl3dTXVmZL375eOQPceJyRvjqKjcYFt/3ina20UA9lX8aMypAvTndRVdhKs3X31hvrSfn1lpJMV0nPIdkZC/lcPrMMf/ogOaqBRsyxQ5YqVoKmfNXQ3Rc/AeCdPkL6nufgNuwD2188NzOj2F3B7++floJIoYddIit9UtN0E1T0fSVpb0Oawcl235tUYL9H57r+maZErJ3ottPJpYH+VOkoBdV6n8yGWKf47Vi8i22KvVkrcqlK+4RlAh7wVq/t7CwfFguVj3qE6lcqXS45ONWy+pUy1RijNZW08HE9WsvkJOvqJzd/1T3W7Q86rG3sMK1F0JYexxDYuEmIfTmHinj0ERS4klqS6Uq8SmToC3nxA8XxyeJZJqaWarBeV/6VMCil+OvHFxem106hss2wteLxZVw0QIyWt7ibcLbojjDIyqHPxQ+tSRGor+Dn/AFpGkFoOd9QhleKf+5oeXVz6Ovb5/PhKoBfZwZGMp25gPLHP9t4EF2f4Ac/c0ndPZ3CxjTxZTjrGx5n7ondwYqFXRX+5Pfd0aB3/lw7dfxsY9VIohvIT9sVjyOp13lbvTTF6sI3POulFZyMJ6qyJyoKFsLD6ley2pLgaihAD/w4X3BvlS0HWdTZZxQTjtEojhqUJnPwNMCfUbIbFPjFg1ziDb2xsdU0iaeFYBVFTO4w2Pcb9OfCq+Oi1wk+t51l7oJB/9Y+krl7bZHg9oipuBWxueomCdmBHxPWDH38XzehYd9Aq7Lj07ttXmrvHe+v1dWxWTKsB8gta1dW9FKa1XOb1VLO3kjiVk18Vup2j/ZXj+ucPVqSQCEAYTXNiw+47gcnltA0jUeiVpwn2/0ThHqvq502KV2sIw/0EW43V2o02iIc1t4lGGVtWkr0bMVx9FTW9GzohKQ/JTunTxelmabPGLsre7rT47Toyl28fR4+mIFZWXDQM0LeNKhZeD1fQ2SKEXTTHPlOPcRfQDp+QULIrqHSjYrazvaUnFkuUAbKOGZrd62rSFRHTg7EcJzY8HDJlIUJVWAASRGh+plDgaaSIpCDA4yEJWpWw9FIbQ5TKYcLdWBZCOqubcDxhCRFu3hVcCsYg5mjnEm1TLlzcd6mI5B5uF7M1p2w5DEWZ2SbjqGYyr2UtFSJV9KzG1rmjIig7KmnirwoJPSZNkcHTMMQ9GXiuSjqihwZn+Udbp2UfV9teV1KnOb87qmwBCZMUMIq7d6XbiVozQcU0bN7yq4GKR0M4ucS4ayYSJ9f9dGlwfE05ezxg603vuYW7Jcc/Sc3EdroJpS+Xh9XhedcEaXnyVDq3CmGKKeQgOpwU20wZt9DclKA12KC7nQQJRZyuEQNUfHRH1CVrtqKm4Htb36y/AqhrOSoS2KC8+RaSAXegH3nTHDYNcGlUKXhbBmw5CR4gom8P9ID51Gw4QxOf9IEQSHj1mG9opuGB9R4UzV/sYvQyKO2PIA6RUvpHTXRPBHlmcuQ6SYTnhZ+XL8IfTk10cwTJ2G1hjP0zT0va8e2EBeVlDDlUdDVZlPT+0Hn+LTaKuQfCI3QAlM80F9FBp9c+aaYx1AuwGf1cKidTjvyNp4RIJskPbP/c3jM9115fEtkam3f3uxtW+D7shIizCcemmxTeFa+pSlU6YrZ2WzuUVHsYR1ZMpRhpY6syWbTq6koYhVAYb5L/Z/69SXB5oSmXAztbnfNgu12routNS8BUMxDXBdCoEZr/U0w3GVboGreDi17y0rsjO+2+8WnxlDi9WW82PPAAzl/Df76x2pVekNGlGG/d82a6TdYaWGiW7D0FMD67pRilmL1E9BCf6111HpqAiQX2XYm6EMCYT4nbF3Dxmurv8WeIxUe5FhqmlP1zerEsF8S9+5ZD2VoZjBqdWPXq9NzrOJc6CI3gXqHtWZjxnzhqyP74xheMvKaz00/2CuQSPzq/vrCQg1goWIHiLt6W+bYX8LiqlNZ6iKhRpG1fLakm2i7u4e4VWIkfhQIyEhI4Rb5XK5lq7SiJqSA/BG45stlGc7l0q9egq9ZaiEDMlHMhTTjpKa7pTyQ//ZXagQDxKxoUaKOUmWeDqwz9OdNotoKTBEd8hQ8oIUalyV4SRDWTu+FUOIa3E5U/rFlF0I99ys6TQX9sot3g7PQjxdruzr4HRPe+lIxfckw4trNfivoLg98uTTGTaOvwI9vJEhZD1rS3k4B+5bUcCjglM4XdhQ++GIVGnloimiBs3QHl+kxzQmGC6X6WyXTznI0LiBoXI7GXYqvSZqKCAlEfbA30bDyaLTi3RYVmxtQfASOuCGY2hnZLgBQyROEwxnvbxPMw9GegiOwMl/8VUpQUm53Iv4YBMt7y8lwMDRguZcz9AD22/5j5EMxBpOpL/AUxscVClLvGlCQDE+oaT8oKxy5nMydxnxDhlafLYzUtcxlDx+RYbocP2rGgUxTGOIfSJVFnRH7uqQeaDo8pzpKJr+rBMcaUqEBlgvlN/3y56H2SRDadYMExGG5pAh9Sq9SGcc9HBpaTVZqSSnypCWIU/Z0Up7b5qQi0RFZUJapMmlNV12TcMYn2iA8ufPwQ6RCYaH98FQqm/nIwxdzc53Xwr0pjHMLNvmjv5jDpzPua5ko8KCIHtHP0ou2JoiR4avqekQnO5ROjlKD9/ZBHYHDK2eYkSiNk0TCZxpao/XrmMI/cn8qYORPEqTtooTBy8j/EQihroXZVItnqCoHkI8PPi9CC6SvsPw7vQQrEJ39duTqrRlR6KotzyR7V9nS722lPwDRqMyyIUbvyX6zT90V44GYoElJpuK/dSVy9rD+axJW/rzu/VYs2KoDBmWaskzMAqTHMHCL3SuY4i98h8ittUejrYaUFJ5YWpmpNMZkSd5El+LyNBEj3LDicp3GM643u0KQ9T94ttSekFzDGWyXAE5DxLkGobY/7KnZ4FPtzLcfyiBan39NlMeylAwhFSird+C4cGdyhB169+W1mzHQI2I2RuetRNMvU6GnZ4eziLN58Kvonfq0TUMQeMKt2E4d8cyrH97cuZAnNa4Yg9Fjy46VT7BcLj/yTazuqKgZ7XweuK9C9YuuH5lgiGnXuc2o/Tg7hgKuwejdF4Gc29GB6kuN4xGqUj4JEOxH3sxpUEYAz08GeeDwSbSooFNIFZbJMz3rjJMX8+Qzrg8eoJh/QiZOxA5o4gMwcgY3bUO5XSSIZf8uq6EL7NBJ9X3M8TvMJwiwztlKGzpowdnZ2fbg+hUFNoenAfiPR8TDCHrJ98h10EicEmN9zJPk+GtbOncHctw9dvURm0jkzmOqJGsHCy9qokXmUxamnA/dvhCIgetVG5meNXSJK+XIcd3yjC3+WyRS226HJGggQ7P12virSaTDH0vdwr5UjhO7bWrDCMX+CCGc3fIEDraXX29XSNEtZaVaGceQiwnGo8ZQmsYpYSvDQNYRza1Xgc8Qjg7Ud1EkaDvkqHHKhGGSMlbw8ma4BA1IlHb58UQ88Lwu6M4omqUDnf6TmNYv8qwPGYYkfhdjtIPZihqDUffFddRegl12OcpDP369TJcviLDu7SlH8qwRiU6skhywzRMu0CHzrq6dCuGeMwwKsPZMsR/geHLGrWsi0uGmuy6KxVRKILxJMNM6A/f0cPR2oa1fGejNNxTrS6m3Mv80NG637z+tcpx21uO3NPUv//jVVmU5f+gOaPJW0d27CL2/IMIlSya32uJ2o7Fr1yUjZyolMX7FFr0B3t8THPzHb8tebTd/xn80fjEcpiHzIghxIq43dke2Wow+Uo3fbRdk9RW9U3kacuN//6fVzDScLmvmcplY1fZrbYIixAxZO30B5+o3uKmqUQZdntV1aI+rURnDhy9ENayEH6IoqnWYc1jM6o+DfdUS1I9wtDs/vPoAYzSjd5pJGrT3KxeqotC2YI2Dqhd065USS4iFtl0lPzCaksq7CPNiM47aam1qtenf29GG2t/Jj0JBsbidygaHqTW6LVvpvgYiD3Vncrf8qMl9AYyHPnshUgDz/SodVPgEWulLVH4q72NDkSKu7Lmp8/G7Uwxld/Y7ic3nskwnCMEHbN5EbDKZkQPgZR+9rRD1eqxLUeqBFDD/nNm5YtMkoqv7cs3B4QMkan9mkssgNSiMYnSAHfXPK74lS4azQnKmiK7TvNi8WGk02Ix3tD0+Zc6ZNARho4py2gp98CJJJ07suHCc8tYx/ZO1oyO9azybG82s964jb0jpGSzhqlA4DWi5DjzB+WnA2SYjcZoeTgrCk1kE5WsxAnKjtYPISOEnzzfy8znHffSKQLgctq/FMMxNXHN4cNz3WwWrfQU8Z873MWAxEI3XOxs4w9FlAqgt2UCMPwV7fuZMJQ87mV6XW3nyoDSDPQ8I231noip3eGjdYENmBE95UsF++2AkmW50bzgrTldzg6JCM6O4f7S+3shJebeBOPwhC477st+sNlVXAhyR1GQWOrWt30v2VvRnB3xMIeNG9B4MCNF9MBXBGu7TaFAzuj6WU0bHIB77mwtNB0zGx6F4WvuKCtvigwvLinGpawRerBHKaHf5Y3LpR0HjFazH/B22lvXhdhHa6+QW60xNbH3hy3mwEfHXCW/m4PgnVd6Ax057mgMu4ZWWptVrWnb5xgvpje7mum6oyKQ5o/pFngvibDKUfdSWqZi765JKqfe1vbQWpiOZv+5qlLWZpk/9aFYQFll7WzrS95vcRLwc1uThxY5q7+AKJ2oarm+ZJujY07jSaHmcZ9BlFCf24ZEesjQsHvvKRD4MGCmemIJsxMs5UclGfnNYgciClGuxynZ28yHc7WOliqXJVVVuU/FazBFB9HghxpjhHstxufmR6yRdl5nDBw2YcRKFP7HHsrLPq4RqwWJB24Hic1RNqJ9W2G4jxfDHR0s2T8Z+Z3Tg+pw+XtmEJO15a39vGwaWqqQuLIbIZHe190savYqnVFjidZ3bdeVlSXwe+Ebhigcy/2+oqFsVrZ7SXq5MQETmqhsPlcM5Unm8pWZ4l6J3BKMVXT6puaRt/eCxhnR2NQe5+idVEOTYqGkD47TP12NCOGZl0t2ac2K1P/QL8vr9qODgOJI5FGtH58/tleO/UhhM6Ecdzb+eH6yMXGznzL7z5/lqlyabLy6u7K0ejc7ohjEgkGQ5H5/8s14lJf3yvBv5A1PfVKrlVXMJDV6bHExuVdU6Zi1KGummFXTtclt4W1/q7bR4ixSvhk2JqS6IRrfiQgJJswn9J3Z5hZYEk+E6NGdQion7Ta0HndQ8jyVFOBIdFFFzH6Hrd+5G4ZRy3w/egEyzK/6d7Vtz+OiUAtbauvqcQxhNG2L7b6R2gkuauqp55GIwDFjtCXkGu00hkcTbhWeuBsR+/u4qpLxi12HjW/3xvDZ4tqtEXi0pylyAg+PXdf0+otee1Yw/D+6JypGjBgxYsSIESNGjBgxYsSIESNGjBgxYsSIESNGjBgxYsSIESNGjBgxYsSIESNGjBgxYsSIESNGjBiS9L8SEOTL3dGO8gAAAABJRU5ErkJggg==",
  },
  {
    title: `  Who Stands to Gain from a TikTok Ban`,
    description: `The Senate has finally passed a law that could bar the  video-sharing app in the U.S., leaving some tech giants in pole position to profit — or pounce.`,
    img: "https://static01.nyt.com/images/2024/04/24/multimedia/24db-tiktok-whft/24db-tiktok-whft-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
    author:
      "data:image/png;base64,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",
  },
  {
    title: `  Anonymous NBA player poll 2024: LeBron or Jordan as the GOAT?
                Most overrated? Finals favorite?`,
    description: ` when The Athletic launched its first NBA player poll in 2019, with
              127 players answering questions about league matters so honestly
              because of the anonymity they were granted, the bar was set very
              high. We hit triple digits again last year (108 players), when the
              popular poll returned in full force after a COVID-19-induced
              hiatus because of limited locker room access for reporters during
              that time.`,
    img: "https://cdn.theathletic.com/cdn-cgi/image/width=1920%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/04/21171122/0422_NBAAnonPoll.png",
    author:
      "https://www.ap.org/wp-content/themes/apnews/assets/images/ap-news-logo.svg",
  },
];

function DiscoverCarousel() {
  const carouselContanier = useRef();
  useEffect(() => {
    const scrollWidth = carouselContanier.current.children[0].clientWidth;
    setInterval(() => {
      if (
        carouselContanier.current.scrollLeft + scrollWidth <
        carouselContanier.current.scrollWidth
      ) {
        carouselContanier.current.scrollLeft += scrollWidth;
      } else {
        carouselContanier.current.scrollLeft = 0;
      }
    }, 3000);
    return clearInterval();
  });

  return (
    <div>
      <h1 className="text-4xl font-semibold mb-2 ">Discover</h1>
      <div className="relative ">
        <div
          className="flex overflow-x-hidden w-full lg:w-[70vw] pb-8 "
          ref={carouselContanier}
        >
          {sample_data.map(({ title, description, img, author }, index) => {
            return (
              <div className="min-w-[100%] h-fit">
                <div className=" pt-6 px-4  ">
                  <div className="flex relative">
                    <img
                      className="absolute h-[3em] rounded-full w-[3em] object-cover top-2 left-2"
                      src={author}
                      alt=""
                    />
                    <img
                      src={img}
                      alt=""
                      className="max-w-[50%] lg:w-[35vw] object-cover rounded h-[20em]"
                    />
                    <div className="ml-4 flex flex-col justify-center ">
                      <p className="text-brandRed text-xl font-medium">
                        TRENDING
                      </p>
                      <h1 className="text-xl font-bold">{title}</h1>
                      <p className="leading-[1.6em] line-clamp-4 text-[#6C6C6C]">
                        {description}
                      </p>
                      <div></div>
                    </div>
                  </div>
                </div>

                <div
                  className=" bottom-0 rounded-full h-2 w-2 hover:scale-[2] transition-all absolute"
                  style={{
                    background: index == 0 ? "black" : "#5f5e5ead",
                    left: `${50 + index * 2}%`,
                  }}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default DiscoverCarousel;
